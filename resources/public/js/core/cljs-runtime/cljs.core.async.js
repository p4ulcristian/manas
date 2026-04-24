goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24717 = (function (f,blockable,meta24718){
this.f = f;
this.blockable = blockable;
this.meta24718 = meta24718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24719,meta24718__$1){
var self__ = this;
var _24719__$1 = this;
return (new cljs.core.async.t_cljs$core$async24717(self__.f,self__.blockable,meta24718__$1));
}));

(cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24719){
var self__ = this;
var _24719__$1 = this;
return self__.meta24718;
}));

(cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24718","meta24718",671810425,null)], null);
}));

(cljs.core.async.t_cljs$core$async24717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24717");

(cljs.core.async.t_cljs$core$async24717.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async24717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24717.
 */
cljs.core.async.__GT_t_cljs$core$async24717 = (function cljs$core$async$__GT_t_cljs$core$async24717(f,blockable,meta24718){
return (new cljs.core.async.t_cljs$core$async24717(f,blockable,meta24718));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24701 = arguments.length;
switch (G__24701) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async24717(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24767 = arguments.length;
switch (G__24767) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24774 = arguments.length;
switch (G__24774) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24779 = arguments.length;
switch (G__24779) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_27349 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27349) : fn1.call(null,val_27349));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27349) : fn1.call(null,val_27349));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24786 = arguments.length;
switch (G__24786) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___27355 = n;
var x_27356 = (0);
while(true){
if((x_27356 < n__5741__auto___27355)){
(a[x_27356] = x_27356);

var G__27357 = (x_27356 + (1));
x_27356 = G__27357;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24796 = (function (flag,meta24797){
this.flag = flag;
this.meta24797 = meta24797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24798,meta24797__$1){
var self__ = this;
var _24798__$1 = this;
return (new cljs.core.async.t_cljs$core$async24796(self__.flag,meta24797__$1));
}));

(cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24798){
var self__ = this;
var _24798__$1 = this;
return self__.meta24797;
}));

(cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24797","meta24797",198155052,null)], null);
}));

(cljs.core.async.t_cljs$core$async24796.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24796");

(cljs.core.async.t_cljs$core$async24796.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async24796");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24796.
 */
cljs.core.async.__GT_t_cljs$core$async24796 = (function cljs$core$async$__GT_t_cljs$core$async24796(flag,meta24797){
return (new cljs.core.async.t_cljs$core$async24796(flag,meta24797));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async24796(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24815 = (function (flag,cb,meta24816){
this.flag = flag;
this.cb = cb;
this.meta24816 = meta24816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24817,meta24816__$1){
var self__ = this;
var _24817__$1 = this;
return (new cljs.core.async.t_cljs$core$async24815(self__.flag,self__.cb,meta24816__$1));
}));

(cljs.core.async.t_cljs$core$async24815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24817){
var self__ = this;
var _24817__$1 = this;
return self__.meta24816;
}));

(cljs.core.async.t_cljs$core$async24815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async24815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24816","meta24816",999132741,null)], null);
}));

(cljs.core.async.t_cljs$core$async24815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24815");

(cljs.core.async.t_cljs$core$async24815.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async24815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24815.
 */
cljs.core.async.__GT_t_cljs$core$async24815 = (function cljs$core$async$__GT_t_cljs$core$async24815(flag,cb,meta24816){
return (new cljs.core.async.t_cljs$core$async24815(flag,cb,meta24816));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async24815(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_27367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_27367)){
if((!(((port_27367.cljs$core$IFn$_invoke$arity$1 ? port_27367.cljs$core$IFn$_invoke$arity$1((1)) : port_27367.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__27368 = (i + (1));
i = G__27368;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__24824_SHARP_){
var G__24831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24824_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24831) : fret.call(null,G__24831));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__24825_SHARP_){
var G__24832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24825_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24832) : fret.call(null,G__24832));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27375 = (i + (1));
i = G__27375;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___27376 = arguments.length;
var i__5877__auto___27377 = (0);
while(true){
if((i__5877__auto___27377 < len__5876__auto___27376)){
args__5882__auto__.push((arguments[i__5877__auto___27377]));

var G__27378 = (i__5877__auto___27377 + (1));
i__5877__auto___27377 = G__27378;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24845){
var map__24847 = p__24845;
var map__24847__$1 = cljs.core.__destructure_map(map__24847);
var opts = map__24847__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24843){
var G__24844 = cljs.core.first(seq24843);
var seq24843__$1 = cljs.core.next(seq24843);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24844,seq24843__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24865 = arguments.length;
switch (G__24865) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24600__auto___27383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_24960){
var state_val_24962 = (state_24960[(1)]);
if((state_val_24962 === (7))){
var inst_24931 = (state_24960[(2)]);
var state_24960__$1 = state_24960;
var statearr_24983_27384 = state_24960__$1;
(statearr_24983_27384[(2)] = inst_24931);

(statearr_24983_27384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (1))){
var state_24960__$1 = state_24960;
var statearr_24988_27385 = state_24960__$1;
(statearr_24988_27385[(2)] = null);

(statearr_24988_27385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (4))){
var inst_24906 = (state_24960[(7)]);
var inst_24906__$1 = (state_24960[(2)]);
var inst_24910 = (inst_24906__$1 == null);
var state_24960__$1 = (function (){var statearr_24994 = state_24960;
(statearr_24994[(7)] = inst_24906__$1);

return statearr_24994;
})();
if(cljs.core.truth_(inst_24910)){
var statearr_24995_27386 = state_24960__$1;
(statearr_24995_27386[(1)] = (5));

} else {
var statearr_24996_27387 = state_24960__$1;
(statearr_24996_27387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (13))){
var state_24960__$1 = state_24960;
var statearr_25000_27388 = state_24960__$1;
(statearr_25000_27388[(2)] = null);

(statearr_25000_27388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (6))){
var inst_24906 = (state_24960[(7)]);
var state_24960__$1 = state_24960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24960__$1,(11),to,inst_24906);
} else {
if((state_val_24962 === (3))){
var inst_24933 = (state_24960[(2)]);
var state_24960__$1 = state_24960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24960__$1,inst_24933);
} else {
if((state_val_24962 === (12))){
var state_24960__$1 = state_24960;
var statearr_25024_27389 = state_24960__$1;
(statearr_25024_27389[(2)] = null);

(statearr_25024_27389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (2))){
var state_24960__$1 = state_24960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24960__$1,(4),from);
} else {
if((state_val_24962 === (11))){
var inst_24922 = (state_24960[(2)]);
var state_24960__$1 = state_24960;
if(cljs.core.truth_(inst_24922)){
var statearr_25028_27390 = state_24960__$1;
(statearr_25028_27390[(1)] = (12));

} else {
var statearr_25029_27391 = state_24960__$1;
(statearr_25029_27391[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (9))){
var state_24960__$1 = state_24960;
var statearr_25031_27392 = state_24960__$1;
(statearr_25031_27392[(2)] = null);

(statearr_25031_27392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (5))){
var state_24960__$1 = state_24960;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25038_27393 = state_24960__$1;
(statearr_25038_27393[(1)] = (8));

} else {
var statearr_25039_27394 = state_24960__$1;
(statearr_25039_27394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (14))){
var inst_24929 = (state_24960[(2)]);
var state_24960__$1 = state_24960;
var statearr_25040_27395 = state_24960__$1;
(statearr_25040_27395[(2)] = inst_24929);

(statearr_25040_27395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (10))){
var inst_24918 = (state_24960[(2)]);
var state_24960__$1 = state_24960;
var statearr_25043_27396 = state_24960__$1;
(statearr_25043_27396[(2)] = inst_24918);

(statearr_25043_27396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24962 === (8))){
var inst_24914 = cljs.core.async.close_BANG_(to);
var state_24960__$1 = state_24960;
var statearr_25045_27397 = state_24960__$1;
(statearr_25045_27397[(2)] = inst_24914);

(statearr_25045_27397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_25079 = [null,null,null,null,null,null,null,null];
(statearr_25079[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_25079[(1)] = (1));

return statearr_25079;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_24960){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_24960);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25080){var ex__24512__auto__ = e25080;
var statearr_25081_27398 = state_24960;
(statearr_25081_27398[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_24960[(4)]))){
var statearr_25083_27399 = state_24960;
(statearr_25083_27399[(1)] = cljs.core.first((state_24960[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27400 = state_24960;
state_24960 = G__27400;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_24960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_24960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_25084 = f__24601__auto__();
(statearr_25084[(6)] = c__24600__auto___27383);

return statearr_25084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__25130){
var vec__25158 = p__25130;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25158,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25158,(1),null);
var job = vec__25158;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__24600__auto___27403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_25166){
var state_val_25167 = (state_25166[(1)]);
if((state_val_25167 === (1))){
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25166__$1,(2),res,v);
} else {
if((state_val_25167 === (2))){
var inst_25163 = (state_25166[(2)]);
var inst_25164 = cljs.core.async.close_BANG_(res);
var state_25166__$1 = (function (){var statearr_25168 = state_25166;
(statearr_25168[(7)] = inst_25163);

return statearr_25168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25166__$1,inst_25164);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0 = (function (){
var statearr_25188 = [null,null,null,null,null,null,null,null];
(statearr_25188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__);

(statearr_25188[(1)] = (1));

return statearr_25188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1 = (function (state_25166){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_25166);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25189){var ex__24512__auto__ = e25189;
var statearr_25190_27406 = state_25166;
(statearr_25190_27406[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_25166[(4)]))){
var statearr_25191_27407 = state_25166;
(statearr_25191_27407[(1)] = cljs.core.first((state_25166[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27408 = state_25166;
state_25166 = G__27408;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = function(state_25166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1.call(this,state_25166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_25193 = f__24601__auto__();
(statearr_25193[(6)] = c__24600__auto___27403);

return statearr_25193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__25194){
var vec__25195 = p__25194;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25195,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25195,(1),null);
var job = vec__25195;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___27409 = n;
var __27410 = (0);
while(true){
if((__27410 < n__5741__auto___27409)){
var G__25198_27411 = type;
var G__25198_27412__$1 = (((G__25198_27411 instanceof cljs.core.Keyword))?G__25198_27411.fqn:null);
switch (G__25198_27412__$1) {
case "compute":
var c__24600__auto___27415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27410,c__24600__auto___27415,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async){
return (function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = ((function (__27410,c__24600__auto___27415,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async){
return (function (state_25221){
var state_val_25222 = (state_25221[(1)]);
if((state_val_25222 === (1))){
var state_25221__$1 = state_25221;
var statearr_25226_27417 = state_25221__$1;
(statearr_25226_27417[(2)] = null);

(statearr_25226_27417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (2))){
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25221__$1,(4),jobs);
} else {
if((state_val_25222 === (3))){
var inst_25217 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25221__$1,inst_25217);
} else {
if((state_val_25222 === (4))){
var inst_25208 = (state_25221[(2)]);
var inst_25209 = process__$1(inst_25208);
var state_25221__$1 = state_25221;
if(cljs.core.truth_(inst_25209)){
var statearr_25227_27418 = state_25221__$1;
(statearr_25227_27418[(1)] = (5));

} else {
var statearr_25228_27419 = state_25221__$1;
(statearr_25228_27419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (5))){
var state_25221__$1 = state_25221;
var statearr_25229_27420 = state_25221__$1;
(statearr_25229_27420[(2)] = null);

(statearr_25229_27420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (6))){
var state_25221__$1 = state_25221;
var statearr_25234_27421 = state_25221__$1;
(statearr_25234_27421[(2)] = null);

(statearr_25234_27421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25222 === (7))){
var inst_25214 = (state_25221[(2)]);
var state_25221__$1 = state_25221;
var statearr_25243_27422 = state_25221__$1;
(statearr_25243_27422[(2)] = inst_25214);

(statearr_25243_27422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27410,c__24600__auto___27415,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async))
;
return ((function (__27410,switch__24508__auto__,c__24600__auto___27415,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0 = (function (){
var statearr_25244 = [null,null,null,null,null,null,null];
(statearr_25244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__);

(statearr_25244[(1)] = (1));

return statearr_25244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1 = (function (state_25221){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_25221);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25247){var ex__24512__auto__ = e25247;
var statearr_25248_27423 = state_25221;
(statearr_25248_27423[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_25221[(4)]))){
var statearr_25249_27424 = state_25221;
(statearr_25249_27424[(1)] = cljs.core.first((state_25221[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27425 = state_25221;
state_25221 = G__27425;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = function(state_25221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1.call(this,state_25221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__;
})()
;})(__27410,switch__24508__auto__,c__24600__auto___27415,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async))
})();
var state__24602__auto__ = (function (){var statearr_25261 = f__24601__auto__();
(statearr_25261[(6)] = c__24600__auto___27415);

return statearr_25261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
});})(__27410,c__24600__auto___27415,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async))
);


break;
case "async":
var c__24600__auto___27426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27410,c__24600__auto___27426,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async){
return (function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = ((function (__27410,c__24600__auto___27426,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async){
return (function (state_25282){
var state_val_25283 = (state_25282[(1)]);
if((state_val_25283 === (1))){
var state_25282__$1 = state_25282;
var statearr_25294_27427 = state_25282__$1;
(statearr_25294_27427[(2)] = null);

(statearr_25294_27427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (2))){
var state_25282__$1 = state_25282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25282__$1,(4),jobs);
} else {
if((state_val_25283 === (3))){
var inst_25278 = (state_25282[(2)]);
var state_25282__$1 = state_25282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25282__$1,inst_25278);
} else {
if((state_val_25283 === (4))){
var inst_25267 = (state_25282[(2)]);
var inst_25270 = async(inst_25267);
var state_25282__$1 = state_25282;
if(cljs.core.truth_(inst_25270)){
var statearr_25297_27428 = state_25282__$1;
(statearr_25297_27428[(1)] = (5));

} else {
var statearr_25298_27429 = state_25282__$1;
(statearr_25298_27429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (5))){
var state_25282__$1 = state_25282;
var statearr_25299_27430 = state_25282__$1;
(statearr_25299_27430[(2)] = null);

(statearr_25299_27430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (6))){
var state_25282__$1 = state_25282;
var statearr_25300_27431 = state_25282__$1;
(statearr_25300_27431[(2)] = null);

(statearr_25300_27431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25283 === (7))){
var inst_25275 = (state_25282[(2)]);
var state_25282__$1 = state_25282;
var statearr_25302_27432 = state_25282__$1;
(statearr_25302_27432[(2)] = inst_25275);

(statearr_25302_27432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27410,c__24600__auto___27426,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async))
;
return ((function (__27410,switch__24508__auto__,c__24600__auto___27426,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0 = (function (){
var statearr_25307 = [null,null,null,null,null,null,null];
(statearr_25307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__);

(statearr_25307[(1)] = (1));

return statearr_25307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1 = (function (state_25282){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_25282);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25308){var ex__24512__auto__ = e25308;
var statearr_25309_27433 = state_25282;
(statearr_25309_27433[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_25282[(4)]))){
var statearr_25310_27434 = state_25282;
(statearr_25310_27434[(1)] = cljs.core.first((state_25282[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27435 = state_25282;
state_25282 = G__27435;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = function(state_25282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1.call(this,state_25282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__;
})()
;})(__27410,switch__24508__auto__,c__24600__auto___27426,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async))
})();
var state__24602__auto__ = (function (){var statearr_25311 = f__24601__auto__();
(statearr_25311[(6)] = c__24600__auto___27426);

return statearr_25311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
});})(__27410,c__24600__auto___27426,G__25198_27411,G__25198_27412__$1,n__5741__auto___27409,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25198_27412__$1))));

}

var G__27436 = (__27410 + (1));
__27410 = G__27436;
continue;
} else {
}
break;
}

var c__24600__auto___27437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_25336){
var state_val_25338 = (state_25336[(1)]);
if((state_val_25338 === (7))){
var inst_25332 = (state_25336[(2)]);
var state_25336__$1 = state_25336;
var statearr_25347_27438 = state_25336__$1;
(statearr_25347_27438[(2)] = inst_25332);

(statearr_25347_27438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25338 === (1))){
var state_25336__$1 = state_25336;
var statearr_25348_27439 = state_25336__$1;
(statearr_25348_27439[(2)] = null);

(statearr_25348_27439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25338 === (4))){
var inst_25314 = (state_25336[(7)]);
var inst_25314__$1 = (state_25336[(2)]);
var inst_25315 = (inst_25314__$1 == null);
var state_25336__$1 = (function (){var statearr_25363 = state_25336;
(statearr_25363[(7)] = inst_25314__$1);

return statearr_25363;
})();
if(cljs.core.truth_(inst_25315)){
var statearr_25364_27440 = state_25336__$1;
(statearr_25364_27440[(1)] = (5));

} else {
var statearr_25365_27441 = state_25336__$1;
(statearr_25365_27441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25338 === (6))){
var inst_25314 = (state_25336[(7)]);
var inst_25321 = (state_25336[(8)]);
var inst_25321__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25323 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25324 = [inst_25314,inst_25321__$1];
var inst_25325 = (new cljs.core.PersistentVector(null,2,(5),inst_25323,inst_25324,null));
var state_25336__$1 = (function (){var statearr_25367 = state_25336;
(statearr_25367[(8)] = inst_25321__$1);

return statearr_25367;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25336__$1,(8),jobs,inst_25325);
} else {
if((state_val_25338 === (3))){
var inst_25334 = (state_25336[(2)]);
var state_25336__$1 = state_25336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25336__$1,inst_25334);
} else {
if((state_val_25338 === (2))){
var state_25336__$1 = state_25336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25336__$1,(4),from);
} else {
if((state_val_25338 === (9))){
var inst_25329 = (state_25336[(2)]);
var state_25336__$1 = (function (){var statearr_25368 = state_25336;
(statearr_25368[(9)] = inst_25329);

return statearr_25368;
})();
var statearr_25371_27442 = state_25336__$1;
(statearr_25371_27442[(2)] = null);

(statearr_25371_27442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25338 === (5))){
var inst_25317 = cljs.core.async.close_BANG_(jobs);
var state_25336__$1 = state_25336;
var statearr_25374_27443 = state_25336__$1;
(statearr_25374_27443[(2)] = inst_25317);

(statearr_25374_27443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25338 === (8))){
var inst_25321 = (state_25336[(8)]);
var inst_25327 = (state_25336[(2)]);
var state_25336__$1 = (function (){var statearr_25377 = state_25336;
(statearr_25377[(10)] = inst_25327);

return statearr_25377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25336__$1,(9),results,inst_25321);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0 = (function (){
var statearr_25387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__);

(statearr_25387[(1)] = (1));

return statearr_25387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1 = (function (state_25336){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_25336);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25388){var ex__24512__auto__ = e25388;
var statearr_25389_27444 = state_25336;
(statearr_25389_27444[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_25336[(4)]))){
var statearr_25390_27445 = state_25336;
(statearr_25390_27445[(1)] = cljs.core.first((state_25336[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27446 = state_25336;
state_25336 = G__27446;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = function(state_25336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1.call(this,state_25336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_25392 = f__24601__auto__();
(statearr_25392[(6)] = c__24600__auto___27437);

return statearr_25392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


var c__24600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_25438){
var state_val_25439 = (state_25438[(1)]);
if((state_val_25439 === (7))){
var inst_25430 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
var statearr_25455_27448 = state_25438__$1;
(statearr_25455_27448[(2)] = inst_25430);

(statearr_25455_27448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (20))){
var state_25438__$1 = state_25438;
var statearr_25459_27449 = state_25438__$1;
(statearr_25459_27449[(2)] = null);

(statearr_25459_27449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (1))){
var state_25438__$1 = state_25438;
var statearr_25460_27450 = state_25438__$1;
(statearr_25460_27450[(2)] = null);

(statearr_25460_27450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (4))){
var inst_25395 = (state_25438[(7)]);
var inst_25395__$1 = (state_25438[(2)]);
var inst_25396 = (inst_25395__$1 == null);
var state_25438__$1 = (function (){var statearr_25465 = state_25438;
(statearr_25465[(7)] = inst_25395__$1);

return statearr_25465;
})();
if(cljs.core.truth_(inst_25396)){
var statearr_25466_27451 = state_25438__$1;
(statearr_25466_27451[(1)] = (5));

} else {
var statearr_25467_27452 = state_25438__$1;
(statearr_25467_27452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (15))){
var inst_25408 = (state_25438[(8)]);
var state_25438__$1 = state_25438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25438__$1,(18),to,inst_25408);
} else {
if((state_val_25439 === (21))){
var inst_25425 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
var statearr_25468_27453 = state_25438__$1;
(statearr_25468_27453[(2)] = inst_25425);

(statearr_25468_27453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (13))){
var inst_25427 = (state_25438[(2)]);
var state_25438__$1 = (function (){var statearr_25473 = state_25438;
(statearr_25473[(9)] = inst_25427);

return statearr_25473;
})();
var statearr_25476_27454 = state_25438__$1;
(statearr_25476_27454[(2)] = null);

(statearr_25476_27454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (6))){
var inst_25395 = (state_25438[(7)]);
var state_25438__$1 = state_25438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25438__$1,(11),inst_25395);
} else {
if((state_val_25439 === (17))){
var inst_25420 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
if(cljs.core.truth_(inst_25420)){
var statearr_25480_27455 = state_25438__$1;
(statearr_25480_27455[(1)] = (19));

} else {
var statearr_25481_27456 = state_25438__$1;
(statearr_25481_27456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (3))){
var inst_25432 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25438__$1,inst_25432);
} else {
if((state_val_25439 === (12))){
var inst_25405 = (state_25438[(10)]);
var state_25438__$1 = state_25438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25438__$1,(14),inst_25405);
} else {
if((state_val_25439 === (2))){
var state_25438__$1 = state_25438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25438__$1,(4),results);
} else {
if((state_val_25439 === (19))){
var state_25438__$1 = state_25438;
var statearr_25482_27457 = state_25438__$1;
(statearr_25482_27457[(2)] = null);

(statearr_25482_27457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (11))){
var inst_25405 = (state_25438[(2)]);
var state_25438__$1 = (function (){var statearr_25485 = state_25438;
(statearr_25485[(10)] = inst_25405);

return statearr_25485;
})();
var statearr_25486_27458 = state_25438__$1;
(statearr_25486_27458[(2)] = null);

(statearr_25486_27458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (9))){
var state_25438__$1 = state_25438;
var statearr_25489_27459 = state_25438__$1;
(statearr_25489_27459[(2)] = null);

(statearr_25489_27459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (5))){
var state_25438__$1 = state_25438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25495_27460 = state_25438__$1;
(statearr_25495_27460[(1)] = (8));

} else {
var statearr_25497_27461 = state_25438__$1;
(statearr_25497_27461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (14))){
var inst_25408 = (state_25438[(8)]);
var inst_25414 = (state_25438[(11)]);
var inst_25408__$1 = (state_25438[(2)]);
var inst_25413 = (inst_25408__$1 == null);
var inst_25414__$1 = cljs.core.not(inst_25413);
var state_25438__$1 = (function (){var statearr_25498 = state_25438;
(statearr_25498[(8)] = inst_25408__$1);

(statearr_25498[(11)] = inst_25414__$1);

return statearr_25498;
})();
if(inst_25414__$1){
var statearr_25502_27462 = state_25438__$1;
(statearr_25502_27462[(1)] = (15));

} else {
var statearr_25503_27463 = state_25438__$1;
(statearr_25503_27463[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (16))){
var inst_25414 = (state_25438[(11)]);
var state_25438__$1 = state_25438;
var statearr_25506_27464 = state_25438__$1;
(statearr_25506_27464[(2)] = inst_25414);

(statearr_25506_27464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (10))){
var inst_25402 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
var statearr_25510_27470 = state_25438__$1;
(statearr_25510_27470[(2)] = inst_25402);

(statearr_25510_27470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (18))){
var inst_25417 = (state_25438[(2)]);
var state_25438__$1 = state_25438;
var statearr_25512_27477 = state_25438__$1;
(statearr_25512_27477[(2)] = inst_25417);

(statearr_25512_27477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25439 === (8))){
var inst_25399 = cljs.core.async.close_BANG_(to);
var state_25438__$1 = state_25438;
var statearr_25514_27483 = state_25438__$1;
(statearr_25514_27483[(2)] = inst_25399);

(statearr_25514_27483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0 = (function (){
var statearr_25518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__);

(statearr_25518[(1)] = (1));

return statearr_25518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1 = (function (state_25438){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_25438);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25520){var ex__24512__auto__ = e25520;
var statearr_25521_27484 = state_25438;
(statearr_25521_27484[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_25438[(4)]))){
var statearr_25526_27485 = state_25438;
(statearr_25526_27485[(1)] = cljs.core.first((state_25438[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27486 = state_25438;
state_25438 = G__27486;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__ = function(state_25438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1.call(this,state_25438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_25532 = f__24601__auto__();
(statearr_25532[(6)] = c__24600__auto__);

return statearr_25532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));

return c__24600__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25541 = arguments.length;
switch (G__25541) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25557 = arguments.length;
switch (G__25557) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25564 = arguments.length;
switch (G__25564) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__24600__auto___27508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_25592){
var state_val_25594 = (state_25592[(1)]);
if((state_val_25594 === (7))){
var inst_25588 = (state_25592[(2)]);
var state_25592__$1 = state_25592;
var statearr_25596_27517 = state_25592__$1;
(statearr_25596_27517[(2)] = inst_25588);

(statearr_25596_27517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (1))){
var state_25592__$1 = state_25592;
var statearr_25597_27522 = state_25592__$1;
(statearr_25597_27522[(2)] = null);

(statearr_25597_27522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (4))){
var inst_25569 = (state_25592[(7)]);
var inst_25569__$1 = (state_25592[(2)]);
var inst_25570 = (inst_25569__$1 == null);
var state_25592__$1 = (function (){var statearr_25598 = state_25592;
(statearr_25598[(7)] = inst_25569__$1);

return statearr_25598;
})();
if(cljs.core.truth_(inst_25570)){
var statearr_25601_27523 = state_25592__$1;
(statearr_25601_27523[(1)] = (5));

} else {
var statearr_25602_27524 = state_25592__$1;
(statearr_25602_27524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (13))){
var state_25592__$1 = state_25592;
var statearr_25606_27528 = state_25592__$1;
(statearr_25606_27528[(2)] = null);

(statearr_25606_27528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (6))){
var inst_25569 = (state_25592[(7)]);
var inst_25575 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25569) : p.call(null,inst_25569));
var state_25592__$1 = state_25592;
if(cljs.core.truth_(inst_25575)){
var statearr_25607_27533 = state_25592__$1;
(statearr_25607_27533[(1)] = (9));

} else {
var statearr_25608_27534 = state_25592__$1;
(statearr_25608_27534[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (3))){
var inst_25590 = (state_25592[(2)]);
var state_25592__$1 = state_25592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25592__$1,inst_25590);
} else {
if((state_val_25594 === (12))){
var state_25592__$1 = state_25592;
var statearr_25610_27535 = state_25592__$1;
(statearr_25610_27535[(2)] = null);

(statearr_25610_27535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (2))){
var state_25592__$1 = state_25592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25592__$1,(4),ch);
} else {
if((state_val_25594 === (11))){
var inst_25569 = (state_25592[(7)]);
var inst_25579 = (state_25592[(2)]);
var state_25592__$1 = state_25592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25592__$1,(8),inst_25579,inst_25569);
} else {
if((state_val_25594 === (9))){
var state_25592__$1 = state_25592;
var statearr_25612_27536 = state_25592__$1;
(statearr_25612_27536[(2)] = tc);

(statearr_25612_27536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (5))){
var inst_25572 = cljs.core.async.close_BANG_(tc);
var inst_25573 = cljs.core.async.close_BANG_(fc);
var state_25592__$1 = (function (){var statearr_25616 = state_25592;
(statearr_25616[(8)] = inst_25572);

return statearr_25616;
})();
var statearr_25617_27537 = state_25592__$1;
(statearr_25617_27537[(2)] = inst_25573);

(statearr_25617_27537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (14))){
var inst_25586 = (state_25592[(2)]);
var state_25592__$1 = state_25592;
var statearr_25618_27538 = state_25592__$1;
(statearr_25618_27538[(2)] = inst_25586);

(statearr_25618_27538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (10))){
var state_25592__$1 = state_25592;
var statearr_25619_27539 = state_25592__$1;
(statearr_25619_27539[(2)] = fc);

(statearr_25619_27539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25594 === (8))){
var inst_25581 = (state_25592[(2)]);
var state_25592__$1 = state_25592;
if(cljs.core.truth_(inst_25581)){
var statearr_25620_27540 = state_25592__$1;
(statearr_25620_27540[(1)] = (12));

} else {
var statearr_25621_27544 = state_25592__$1;
(statearr_25621_27544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_25623 = [null,null,null,null,null,null,null,null,null];
(statearr_25623[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_25623[(1)] = (1));

return statearr_25623;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_25592){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_25592);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25625){var ex__24512__auto__ = e25625;
var statearr_25626_27545 = state_25592;
(statearr_25626_27545[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_25592[(4)]))){
var statearr_25627_27546 = state_25592;
(statearr_25627_27546[(1)] = cljs.core.first((state_25592[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27553 = state_25592;
state_25592 = G__27553;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_25592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_25592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_25629 = f__24601__auto__();
(statearr_25629[(6)] = c__24600__auto___27508);

return statearr_25629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_25653){
var state_val_25654 = (state_25653[(1)]);
if((state_val_25654 === (7))){
var inst_25649 = (state_25653[(2)]);
var state_25653__$1 = state_25653;
var statearr_25657_27554 = state_25653__$1;
(statearr_25657_27554[(2)] = inst_25649);

(statearr_25657_27554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (1))){
var inst_25630 = init;
var inst_25631 = inst_25630;
var state_25653__$1 = (function (){var statearr_25658 = state_25653;
(statearr_25658[(7)] = inst_25631);

return statearr_25658;
})();
var statearr_25659_27555 = state_25653__$1;
(statearr_25659_27555[(2)] = null);

(statearr_25659_27555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (4))){
var inst_25634 = (state_25653[(8)]);
var inst_25634__$1 = (state_25653[(2)]);
var inst_25635 = (inst_25634__$1 == null);
var state_25653__$1 = (function (){var statearr_25660 = state_25653;
(statearr_25660[(8)] = inst_25634__$1);

return statearr_25660;
})();
if(cljs.core.truth_(inst_25635)){
var statearr_25661_27560 = state_25653__$1;
(statearr_25661_27560[(1)] = (5));

} else {
var statearr_25662_27561 = state_25653__$1;
(statearr_25662_27561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (6))){
var inst_25631 = (state_25653[(7)]);
var inst_25634 = (state_25653[(8)]);
var inst_25640 = (state_25653[(9)]);
var inst_25640__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_25631,inst_25634) : f.call(null,inst_25631,inst_25634));
var inst_25641 = cljs.core.reduced_QMARK_(inst_25640__$1);
var state_25653__$1 = (function (){var statearr_25664 = state_25653;
(statearr_25664[(9)] = inst_25640__$1);

return statearr_25664;
})();
if(inst_25641){
var statearr_25666_27563 = state_25653__$1;
(statearr_25666_27563[(1)] = (8));

} else {
var statearr_25668_27564 = state_25653__$1;
(statearr_25668_27564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (3))){
var inst_25651 = (state_25653[(2)]);
var state_25653__$1 = state_25653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25653__$1,inst_25651);
} else {
if((state_val_25654 === (2))){
var state_25653__$1 = state_25653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25653__$1,(4),ch);
} else {
if((state_val_25654 === (9))){
var inst_25640 = (state_25653[(9)]);
var inst_25631 = inst_25640;
var state_25653__$1 = (function (){var statearr_25670 = state_25653;
(statearr_25670[(7)] = inst_25631);

return statearr_25670;
})();
var statearr_25671_27565 = state_25653__$1;
(statearr_25671_27565[(2)] = null);

(statearr_25671_27565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (5))){
var inst_25631 = (state_25653[(7)]);
var state_25653__$1 = state_25653;
var statearr_25673_27566 = state_25653__$1;
(statearr_25673_27566[(2)] = inst_25631);

(statearr_25673_27566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (10))){
var inst_25647 = (state_25653[(2)]);
var state_25653__$1 = state_25653;
var statearr_25674_27568 = state_25653__$1;
(statearr_25674_27568[(2)] = inst_25647);

(statearr_25674_27568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (8))){
var inst_25640 = (state_25653[(9)]);
var inst_25643 = cljs.core.deref(inst_25640);
var state_25653__$1 = state_25653;
var statearr_25675_27569 = state_25653__$1;
(statearr_25675_27569[(2)] = inst_25643);

(statearr_25675_27569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24509__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24509__auto____0 = (function (){
var statearr_25678 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25678[(0)] = cljs$core$async$reduce_$_state_machine__24509__auto__);

(statearr_25678[(1)] = (1));

return statearr_25678;
});
var cljs$core$async$reduce_$_state_machine__24509__auto____1 = (function (state_25653){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_25653);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25679){var ex__24512__auto__ = e25679;
var statearr_25680_27570 = state_25653;
(statearr_25680_27570[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_25653[(4)]))){
var statearr_25682_27571 = state_25653;
(statearr_25682_27571[(1)] = cljs.core.first((state_25653[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27572 = state_25653;
state_25653 = G__27572;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24509__auto__ = function(state_25653){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24509__auto____1.call(this,state_25653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24509__auto____0;
cljs$core$async$reduce_$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24509__auto____1;
return cljs$core$async$reduce_$_state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_25686 = f__24601__auto__();
(statearr_25686[(6)] = c__24600__auto__);

return statearr_25686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));

return c__24600__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__24600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_25695){
var state_val_25696 = (state_25695[(1)]);
if((state_val_25696 === (1))){
var inst_25690 = cljs.core.async.reduce(f__$1,init,ch);
var state_25695__$1 = state_25695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25695__$1,(2),inst_25690);
} else {
if((state_val_25696 === (2))){
var inst_25692 = (state_25695[(2)]);
var inst_25693 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_25692) : f__$1.call(null,inst_25692));
var state_25695__$1 = state_25695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25695__$1,inst_25693);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24509__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24509__auto____0 = (function (){
var statearr_25707 = [null,null,null,null,null,null,null];
(statearr_25707[(0)] = cljs$core$async$transduce_$_state_machine__24509__auto__);

(statearr_25707[(1)] = (1));

return statearr_25707;
});
var cljs$core$async$transduce_$_state_machine__24509__auto____1 = (function (state_25695){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_25695);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25711){var ex__24512__auto__ = e25711;
var statearr_25712_27574 = state_25695;
(statearr_25712_27574[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_25695[(4)]))){
var statearr_25713_27575 = state_25695;
(statearr_25713_27575[(1)] = cljs.core.first((state_25695[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27576 = state_25695;
state_25695 = G__27576;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24509__auto__ = function(state_25695){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24509__auto____1.call(this,state_25695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24509__auto____0;
cljs$core$async$transduce_$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24509__auto____1;
return cljs$core$async$transduce_$_state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_25742 = f__24601__auto__();
(statearr_25742[(6)] = c__24600__auto__);

return statearr_25742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));

return c__24600__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__25752 = arguments.length;
switch (G__25752) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_25797){
var state_val_25798 = (state_25797[(1)]);
if((state_val_25798 === (7))){
var inst_25772 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25803_27579 = state_25797__$1;
(statearr_25803_27579[(2)] = inst_25772);

(statearr_25803_27579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (1))){
var inst_25763 = cljs.core.seq(coll);
var inst_25764 = inst_25763;
var state_25797__$1 = (function (){var statearr_25807 = state_25797;
(statearr_25807[(7)] = inst_25764);

return statearr_25807;
})();
var statearr_25810_27581 = state_25797__$1;
(statearr_25810_27581[(2)] = null);

(statearr_25810_27581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (4))){
var inst_25764 = (state_25797[(7)]);
var inst_25768 = cljs.core.first(inst_25764);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25797__$1,(7),ch,inst_25768);
} else {
if((state_val_25798 === (13))){
var inst_25788 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25823_27582 = state_25797__$1;
(statearr_25823_27582[(2)] = inst_25788);

(statearr_25823_27582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (6))){
var inst_25775 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25775)){
var statearr_25824_27584 = state_25797__$1;
(statearr_25824_27584[(1)] = (8));

} else {
var statearr_25825_27585 = state_25797__$1;
(statearr_25825_27585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (3))){
var inst_25792 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25797__$1,inst_25792);
} else {
if((state_val_25798 === (12))){
var state_25797__$1 = state_25797;
var statearr_25826_27586 = state_25797__$1;
(statearr_25826_27586[(2)] = null);

(statearr_25826_27586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (2))){
var inst_25764 = (state_25797[(7)]);
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25764)){
var statearr_25827_27591 = state_25797__$1;
(statearr_25827_27591[(1)] = (4));

} else {
var statearr_25828_27592 = state_25797__$1;
(statearr_25828_27592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (11))){
var inst_25785 = cljs.core.async.close_BANG_(ch);
var state_25797__$1 = state_25797;
var statearr_25829_27593 = state_25797__$1;
(statearr_25829_27593[(2)] = inst_25785);

(statearr_25829_27593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (9))){
var state_25797__$1 = state_25797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25832_27594 = state_25797__$1;
(statearr_25832_27594[(1)] = (11));

} else {
var statearr_25833_27595 = state_25797__$1;
(statearr_25833_27595[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (5))){
var inst_25764 = (state_25797[(7)]);
var state_25797__$1 = state_25797;
var statearr_25836_27596 = state_25797__$1;
(statearr_25836_27596[(2)] = inst_25764);

(statearr_25836_27596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (10))){
var inst_25790 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25842_27597 = state_25797__$1;
(statearr_25842_27597[(2)] = inst_25790);

(statearr_25842_27597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (8))){
var inst_25764 = (state_25797[(7)]);
var inst_25779 = cljs.core.next(inst_25764);
var inst_25764__$1 = inst_25779;
var state_25797__$1 = (function (){var statearr_25848 = state_25797;
(statearr_25848[(7)] = inst_25764__$1);

return statearr_25848;
})();
var statearr_25849_27598 = state_25797__$1;
(statearr_25849_27598[(2)] = null);

(statearr_25849_27598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_25853 = [null,null,null,null,null,null,null,null];
(statearr_25853[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_25853[(1)] = (1));

return statearr_25853;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_25797){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_25797);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e25854){var ex__24512__auto__ = e25854;
var statearr_25856_27600 = state_25797;
(statearr_25856_27600[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_25797[(4)]))){
var statearr_25860_27601 = state_25797;
(statearr_25860_27601[(1)] = cljs.core.first((state_25797[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27602 = state_25797;
state_25797 = G__27602;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_25862 = f__24601__auto__();
(statearr_25862[(6)] = c__24600__auto__);

return statearr_25862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));

return c__24600__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25865 = arguments.length;
switch (G__25865) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27607 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27607(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27608 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27608(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27609 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27609(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27610 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27610(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25906 = (function (ch,cs,meta25907){
this.ch = ch;
this.cs = cs;
this.meta25907 = meta25907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25908,meta25907__$1){
var self__ = this;
var _25908__$1 = this;
return (new cljs.core.async.t_cljs$core$async25906(self__.ch,self__.cs,meta25907__$1));
}));

(cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25908){
var self__ = this;
var _25908__$1 = this;
return self__.meta25907;
}));

(cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25906.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25907","meta25907",1725403297,null)], null);
}));

(cljs.core.async.t_cljs$core$async25906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25906");

(cljs.core.async.t_cljs$core$async25906.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async25906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25906.
 */
cljs.core.async.__GT_t_cljs$core$async25906 = (function cljs$core$async$__GT_t_cljs$core$async25906(ch,cs,meta25907){
return (new cljs.core.async.t_cljs$core$async25906(ch,cs,meta25907));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async25906(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__24600__auto___27614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_26042){
var state_val_26045 = (state_26042[(1)]);
if((state_val_26045 === (7))){
var inst_26038 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26047_27615 = state_26042__$1;
(statearr_26047_27615[(2)] = inst_26038);

(statearr_26047_27615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (20))){
var inst_25943 = (state_26042[(7)]);
var inst_25955 = cljs.core.first(inst_25943);
var inst_25956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25955,(0),null);
var inst_25957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25955,(1),null);
var state_26042__$1 = (function (){var statearr_26049 = state_26042;
(statearr_26049[(8)] = inst_25956);

return statearr_26049;
})();
if(cljs.core.truth_(inst_25957)){
var statearr_26050_27616 = state_26042__$1;
(statearr_26050_27616[(1)] = (22));

} else {
var statearr_26051_27617 = state_26042__$1;
(statearr_26051_27617[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (27))){
var inst_25985 = (state_26042[(9)]);
var inst_25987 = (state_26042[(10)]);
var inst_25992 = (state_26042[(11)]);
var inst_25912 = (state_26042[(12)]);
var inst_25992__$1 = cljs.core._nth(inst_25985,inst_25987);
var inst_25993 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25992__$1,inst_25912,done);
var state_26042__$1 = (function (){var statearr_26052 = state_26042;
(statearr_26052[(11)] = inst_25992__$1);

return statearr_26052;
})();
if(cljs.core.truth_(inst_25993)){
var statearr_26053_27618 = state_26042__$1;
(statearr_26053_27618[(1)] = (30));

} else {
var statearr_26054_27619 = state_26042__$1;
(statearr_26054_27619[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (1))){
var state_26042__$1 = state_26042;
var statearr_26058_27620 = state_26042__$1;
(statearr_26058_27620[(2)] = null);

(statearr_26058_27620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (24))){
var inst_25943 = (state_26042[(7)]);
var inst_25962 = (state_26042[(2)]);
var inst_25963 = cljs.core.next(inst_25943);
var inst_25921 = inst_25963;
var inst_25922 = null;
var inst_25923 = (0);
var inst_25924 = (0);
var state_26042__$1 = (function (){var statearr_26060 = state_26042;
(statearr_26060[(13)] = inst_25962);

(statearr_26060[(14)] = inst_25921);

(statearr_26060[(15)] = inst_25922);

(statearr_26060[(16)] = inst_25923);

(statearr_26060[(17)] = inst_25924);

return statearr_26060;
})();
var statearr_26062_27621 = state_26042__$1;
(statearr_26062_27621[(2)] = null);

(statearr_26062_27621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (39))){
var state_26042__$1 = state_26042;
var statearr_26069_27622 = state_26042__$1;
(statearr_26069_27622[(2)] = null);

(statearr_26069_27622[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (4))){
var inst_25912 = (state_26042[(12)]);
var inst_25912__$1 = (state_26042[(2)]);
var inst_25913 = (inst_25912__$1 == null);
var state_26042__$1 = (function (){var statearr_26070 = state_26042;
(statearr_26070[(12)] = inst_25912__$1);

return statearr_26070;
})();
if(cljs.core.truth_(inst_25913)){
var statearr_26071_27623 = state_26042__$1;
(statearr_26071_27623[(1)] = (5));

} else {
var statearr_26072_27624 = state_26042__$1;
(statearr_26072_27624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (15))){
var inst_25924 = (state_26042[(17)]);
var inst_25921 = (state_26042[(14)]);
var inst_25922 = (state_26042[(15)]);
var inst_25923 = (state_26042[(16)]);
var inst_25939 = (state_26042[(2)]);
var inst_25940 = (inst_25924 + (1));
var tmp26064 = inst_25922;
var tmp26065 = inst_25921;
var tmp26066 = inst_25923;
var inst_25921__$1 = tmp26065;
var inst_25922__$1 = tmp26064;
var inst_25923__$1 = tmp26066;
var inst_25924__$1 = inst_25940;
var state_26042__$1 = (function (){var statearr_26081 = state_26042;
(statearr_26081[(18)] = inst_25939);

(statearr_26081[(14)] = inst_25921__$1);

(statearr_26081[(15)] = inst_25922__$1);

(statearr_26081[(16)] = inst_25923__$1);

(statearr_26081[(17)] = inst_25924__$1);

return statearr_26081;
})();
var statearr_26082_27625 = state_26042__$1;
(statearr_26082_27625[(2)] = null);

(statearr_26082_27625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (21))){
var inst_25966 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26087_27626 = state_26042__$1;
(statearr_26087_27626[(2)] = inst_25966);

(statearr_26087_27626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (31))){
var inst_25992 = (state_26042[(11)]);
var inst_25996 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25992);
var state_26042__$1 = state_26042;
var statearr_26089_27627 = state_26042__$1;
(statearr_26089_27627[(2)] = inst_25996);

(statearr_26089_27627[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (32))){
var inst_25987 = (state_26042[(10)]);
var inst_25984 = (state_26042[(19)]);
var inst_25985 = (state_26042[(9)]);
var inst_25986 = (state_26042[(20)]);
var inst_25998 = (state_26042[(2)]);
var inst_25999 = (inst_25987 + (1));
var tmp26084 = inst_25984;
var tmp26085 = inst_25985;
var tmp26086 = inst_25986;
var inst_25984__$1 = tmp26084;
var inst_25985__$1 = tmp26085;
var inst_25986__$1 = tmp26086;
var inst_25987__$1 = inst_25999;
var state_26042__$1 = (function (){var statearr_26091 = state_26042;
(statearr_26091[(21)] = inst_25998);

(statearr_26091[(19)] = inst_25984__$1);

(statearr_26091[(9)] = inst_25985__$1);

(statearr_26091[(20)] = inst_25986__$1);

(statearr_26091[(10)] = inst_25987__$1);

return statearr_26091;
})();
var statearr_26098_27628 = state_26042__$1;
(statearr_26098_27628[(2)] = null);

(statearr_26098_27628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (40))){
var inst_26011 = (state_26042[(22)]);
var inst_26015 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26011);
var state_26042__$1 = state_26042;
var statearr_26099_27629 = state_26042__$1;
(statearr_26099_27629[(2)] = inst_26015);

(statearr_26099_27629[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (33))){
var inst_26002 = (state_26042[(23)]);
var inst_26004 = cljs.core.chunked_seq_QMARK_(inst_26002);
var state_26042__$1 = state_26042;
if(inst_26004){
var statearr_26103_27630 = state_26042__$1;
(statearr_26103_27630[(1)] = (36));

} else {
var statearr_26104_27631 = state_26042__$1;
(statearr_26104_27631[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (13))){
var inst_25933 = (state_26042[(24)]);
var inst_25936 = cljs.core.async.close_BANG_(inst_25933);
var state_26042__$1 = state_26042;
var statearr_26105_27632 = state_26042__$1;
(statearr_26105_27632[(2)] = inst_25936);

(statearr_26105_27632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (22))){
var inst_25956 = (state_26042[(8)]);
var inst_25959 = cljs.core.async.close_BANG_(inst_25956);
var state_26042__$1 = state_26042;
var statearr_26112_27633 = state_26042__$1;
(statearr_26112_27633[(2)] = inst_25959);

(statearr_26112_27633[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (36))){
var inst_26002 = (state_26042[(23)]);
var inst_26006 = cljs.core.chunk_first(inst_26002);
var inst_26007 = cljs.core.chunk_rest(inst_26002);
var inst_26008 = cljs.core.count(inst_26006);
var inst_25984 = inst_26007;
var inst_25985 = inst_26006;
var inst_25986 = inst_26008;
var inst_25987 = (0);
var state_26042__$1 = (function (){var statearr_26115 = state_26042;
(statearr_26115[(19)] = inst_25984);

(statearr_26115[(9)] = inst_25985);

(statearr_26115[(20)] = inst_25986);

(statearr_26115[(10)] = inst_25987);

return statearr_26115;
})();
var statearr_26118_27635 = state_26042__$1;
(statearr_26118_27635[(2)] = null);

(statearr_26118_27635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (41))){
var inst_26002 = (state_26042[(23)]);
var inst_26017 = (state_26042[(2)]);
var inst_26018 = cljs.core.next(inst_26002);
var inst_25984 = inst_26018;
var inst_25985 = null;
var inst_25986 = (0);
var inst_25987 = (0);
var state_26042__$1 = (function (){var statearr_26120 = state_26042;
(statearr_26120[(25)] = inst_26017);

(statearr_26120[(19)] = inst_25984);

(statearr_26120[(9)] = inst_25985);

(statearr_26120[(20)] = inst_25986);

(statearr_26120[(10)] = inst_25987);

return statearr_26120;
})();
var statearr_26121_27636 = state_26042__$1;
(statearr_26121_27636[(2)] = null);

(statearr_26121_27636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (43))){
var state_26042__$1 = state_26042;
var statearr_26123_27637 = state_26042__$1;
(statearr_26123_27637[(2)] = null);

(statearr_26123_27637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (29))){
var inst_26026 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26126_27638 = state_26042__$1;
(statearr_26126_27638[(2)] = inst_26026);

(statearr_26126_27638[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (44))){
var inst_26035 = (state_26042[(2)]);
var state_26042__$1 = (function (){var statearr_26127 = state_26042;
(statearr_26127[(26)] = inst_26035);

return statearr_26127;
})();
var statearr_26128_27639 = state_26042__$1;
(statearr_26128_27639[(2)] = null);

(statearr_26128_27639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (6))){
var inst_25976 = (state_26042[(27)]);
var inst_25975 = cljs.core.deref(cs);
var inst_25976__$1 = cljs.core.keys(inst_25975);
var inst_25977 = cljs.core.count(inst_25976__$1);
var inst_25978 = cljs.core.reset_BANG_(dctr,inst_25977);
var inst_25983 = cljs.core.seq(inst_25976__$1);
var inst_25984 = inst_25983;
var inst_25985 = null;
var inst_25986 = (0);
var inst_25987 = (0);
var state_26042__$1 = (function (){var statearr_26130 = state_26042;
(statearr_26130[(27)] = inst_25976__$1);

(statearr_26130[(28)] = inst_25978);

(statearr_26130[(19)] = inst_25984);

(statearr_26130[(9)] = inst_25985);

(statearr_26130[(20)] = inst_25986);

(statearr_26130[(10)] = inst_25987);

return statearr_26130;
})();
var statearr_26132_27641 = state_26042__$1;
(statearr_26132_27641[(2)] = null);

(statearr_26132_27641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (28))){
var inst_25984 = (state_26042[(19)]);
var inst_26002 = (state_26042[(23)]);
var inst_26002__$1 = cljs.core.seq(inst_25984);
var state_26042__$1 = (function (){var statearr_26135 = state_26042;
(statearr_26135[(23)] = inst_26002__$1);

return statearr_26135;
})();
if(inst_26002__$1){
var statearr_26137_27642 = state_26042__$1;
(statearr_26137_27642[(1)] = (33));

} else {
var statearr_26138_27643 = state_26042__$1;
(statearr_26138_27643[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (25))){
var inst_25987 = (state_26042[(10)]);
var inst_25986 = (state_26042[(20)]);
var inst_25989 = (inst_25987 < inst_25986);
var inst_25990 = inst_25989;
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_25990)){
var statearr_26139_27644 = state_26042__$1;
(statearr_26139_27644[(1)] = (27));

} else {
var statearr_26140_27645 = state_26042__$1;
(statearr_26140_27645[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (34))){
var state_26042__$1 = state_26042;
var statearr_26142_27646 = state_26042__$1;
(statearr_26142_27646[(2)] = null);

(statearr_26142_27646[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (17))){
var state_26042__$1 = state_26042;
var statearr_26150_27647 = state_26042__$1;
(statearr_26150_27647[(2)] = null);

(statearr_26150_27647[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (3))){
var inst_26040 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26042__$1,inst_26040);
} else {
if((state_val_26045 === (12))){
var inst_25971 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26165_27648 = state_26042__$1;
(statearr_26165_27648[(2)] = inst_25971);

(statearr_26165_27648[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (2))){
var state_26042__$1 = state_26042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26042__$1,(4),ch);
} else {
if((state_val_26045 === (23))){
var state_26042__$1 = state_26042;
var statearr_26179_27649 = state_26042__$1;
(statearr_26179_27649[(2)] = null);

(statearr_26179_27649[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (35))){
var inst_26024 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26187_27651 = state_26042__$1;
(statearr_26187_27651[(2)] = inst_26024);

(statearr_26187_27651[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (19))){
var inst_25943 = (state_26042[(7)]);
var inst_25947 = cljs.core.chunk_first(inst_25943);
var inst_25948 = cljs.core.chunk_rest(inst_25943);
var inst_25949 = cljs.core.count(inst_25947);
var inst_25921 = inst_25948;
var inst_25922 = inst_25947;
var inst_25923 = inst_25949;
var inst_25924 = (0);
var state_26042__$1 = (function (){var statearr_26194 = state_26042;
(statearr_26194[(14)] = inst_25921);

(statearr_26194[(15)] = inst_25922);

(statearr_26194[(16)] = inst_25923);

(statearr_26194[(17)] = inst_25924);

return statearr_26194;
})();
var statearr_26196_27652 = state_26042__$1;
(statearr_26196_27652[(2)] = null);

(statearr_26196_27652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (11))){
var inst_25921 = (state_26042[(14)]);
var inst_25943 = (state_26042[(7)]);
var inst_25943__$1 = cljs.core.seq(inst_25921);
var state_26042__$1 = (function (){var statearr_26199 = state_26042;
(statearr_26199[(7)] = inst_25943__$1);

return statearr_26199;
})();
if(inst_25943__$1){
var statearr_26200_27653 = state_26042__$1;
(statearr_26200_27653[(1)] = (16));

} else {
var statearr_26201_27654 = state_26042__$1;
(statearr_26201_27654[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (9))){
var inst_25973 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26203_27655 = state_26042__$1;
(statearr_26203_27655[(2)] = inst_25973);

(statearr_26203_27655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (5))){
var inst_25919 = cljs.core.deref(cs);
var inst_25920 = cljs.core.seq(inst_25919);
var inst_25921 = inst_25920;
var inst_25922 = null;
var inst_25923 = (0);
var inst_25924 = (0);
var state_26042__$1 = (function (){var statearr_26207 = state_26042;
(statearr_26207[(14)] = inst_25921);

(statearr_26207[(15)] = inst_25922);

(statearr_26207[(16)] = inst_25923);

(statearr_26207[(17)] = inst_25924);

return statearr_26207;
})();
var statearr_26208_27656 = state_26042__$1;
(statearr_26208_27656[(2)] = null);

(statearr_26208_27656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (14))){
var state_26042__$1 = state_26042;
var statearr_26209_27657 = state_26042__$1;
(statearr_26209_27657[(2)] = null);

(statearr_26209_27657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (45))){
var inst_26032 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26213_27658 = state_26042__$1;
(statearr_26213_27658[(2)] = inst_26032);

(statearr_26213_27658[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (26))){
var inst_25976 = (state_26042[(27)]);
var inst_26028 = (state_26042[(2)]);
var inst_26029 = cljs.core.seq(inst_25976);
var state_26042__$1 = (function (){var statearr_26214 = state_26042;
(statearr_26214[(29)] = inst_26028);

return statearr_26214;
})();
if(inst_26029){
var statearr_26215_27659 = state_26042__$1;
(statearr_26215_27659[(1)] = (42));

} else {
var statearr_26216_27660 = state_26042__$1;
(statearr_26216_27660[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (16))){
var inst_25943 = (state_26042[(7)]);
var inst_25945 = cljs.core.chunked_seq_QMARK_(inst_25943);
var state_26042__$1 = state_26042;
if(inst_25945){
var statearr_26217_27661 = state_26042__$1;
(statearr_26217_27661[(1)] = (19));

} else {
var statearr_26218_27662 = state_26042__$1;
(statearr_26218_27662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (38))){
var inst_26021 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26222_27663 = state_26042__$1;
(statearr_26222_27663[(2)] = inst_26021);

(statearr_26222_27663[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (30))){
var state_26042__$1 = state_26042;
var statearr_26224_27664 = state_26042__$1;
(statearr_26224_27664[(2)] = null);

(statearr_26224_27664[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (10))){
var inst_25922 = (state_26042[(15)]);
var inst_25924 = (state_26042[(17)]);
var inst_25932 = cljs.core._nth(inst_25922,inst_25924);
var inst_25933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25932,(0),null);
var inst_25934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25932,(1),null);
var state_26042__$1 = (function (){var statearr_26228 = state_26042;
(statearr_26228[(24)] = inst_25933);

return statearr_26228;
})();
if(cljs.core.truth_(inst_25934)){
var statearr_26230_27665 = state_26042__$1;
(statearr_26230_27665[(1)] = (13));

} else {
var statearr_26233_27666 = state_26042__$1;
(statearr_26233_27666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (18))){
var inst_25969 = (state_26042[(2)]);
var state_26042__$1 = state_26042;
var statearr_26235_27670 = state_26042__$1;
(statearr_26235_27670[(2)] = inst_25969);

(statearr_26235_27670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (42))){
var state_26042__$1 = state_26042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26042__$1,(45),dchan);
} else {
if((state_val_26045 === (37))){
var inst_26002 = (state_26042[(23)]);
var inst_26011 = (state_26042[(22)]);
var inst_25912 = (state_26042[(12)]);
var inst_26011__$1 = cljs.core.first(inst_26002);
var inst_26012 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26011__$1,inst_25912,done);
var state_26042__$1 = (function (){var statearr_26238 = state_26042;
(statearr_26238[(22)] = inst_26011__$1);

return statearr_26238;
})();
if(cljs.core.truth_(inst_26012)){
var statearr_26239_27671 = state_26042__$1;
(statearr_26239_27671[(1)] = (39));

} else {
var statearr_26240_27672 = state_26042__$1;
(statearr_26240_27672[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26045 === (8))){
var inst_25924 = (state_26042[(17)]);
var inst_25923 = (state_26042[(16)]);
var inst_25926 = (inst_25924 < inst_25923);
var inst_25927 = inst_25926;
var state_26042__$1 = state_26042;
if(cljs.core.truth_(inst_25927)){
var statearr_26241_27673 = state_26042__$1;
(statearr_26241_27673[(1)] = (10));

} else {
var statearr_26242_27674 = state_26042__$1;
(statearr_26242_27674[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__24509__auto__ = null;
var cljs$core$async$mult_$_state_machine__24509__auto____0 = (function (){
var statearr_26243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26243[(0)] = cljs$core$async$mult_$_state_machine__24509__auto__);

(statearr_26243[(1)] = (1));

return statearr_26243;
});
var cljs$core$async$mult_$_state_machine__24509__auto____1 = (function (state_26042){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_26042);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e26244){var ex__24512__auto__ = e26244;
var statearr_26245_27678 = state_26042;
(statearr_26245_27678[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_26042[(4)]))){
var statearr_26246_27679 = state_26042;
(statearr_26246_27679[(1)] = cljs.core.first((state_26042[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27680 = state_26042;
state_26042 = G__27680;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24509__auto__ = function(state_26042){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24509__auto____1.call(this,state_26042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24509__auto____0;
cljs$core$async$mult_$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24509__auto____1;
return cljs$core$async$mult_$_state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_26249 = f__24601__auto__();
(statearr_26249[(6)] = c__24600__auto___27614);

return statearr_26249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26252 = arguments.length;
switch (G__26252) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_27683 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_27683(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27684 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_27684(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27685 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27685(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27686 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_27686(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27689 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27689(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___27690 = arguments.length;
var i__5877__auto___27691 = (0);
while(true){
if((i__5877__auto___27691 < len__5876__auto___27690)){
args__5882__auto__.push((arguments[i__5877__auto___27691]));

var G__27692 = (i__5877__auto___27691 + (1));
i__5877__auto___27691 = G__27692;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26277){
var map__26278 = p__26277;
var map__26278__$1 = cljs.core.__destructure_map(map__26278);
var opts = map__26278__$1;
var statearr_26279_27693 = state;
(statearr_26279_27693[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_26287_27694 = state;
(statearr_26287_27694[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_26289_27695 = state;
(statearr_26289_27695[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26273){
var G__26274 = cljs.core.first(seq26273);
var seq26273__$1 = cljs.core.next(seq26273);
var G__26275 = cljs.core.first(seq26273__$1);
var seq26273__$2 = cljs.core.next(seq26273__$1);
var G__26276 = cljs.core.first(seq26273__$2);
var seq26273__$3 = cljs.core.next(seq26273__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26274,G__26275,G__26276,seq26273__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26297 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26298){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26298 = meta26298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26299,meta26298__$1){
var self__ = this;
var _26299__$1 = this;
return (new cljs.core.async.t_cljs$core$async26297(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26298__$1));
}));

(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26299){
var self__ = this;
var _26299__$1 = this;
return self__.meta26298;
}));

(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26297.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async26297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26298","meta26298",347150460,null)], null);
}));

(cljs.core.async.t_cljs$core$async26297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26297");

(cljs.core.async.t_cljs$core$async26297.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async26297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26297.
 */
cljs.core.async.__GT_t_cljs$core$async26297 = (function cljs$core$async$__GT_t_cljs$core$async26297(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26298){
return (new cljs.core.async.t_cljs$core$async26297(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26298));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async26297(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__24600__auto___27699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_26386){
var state_val_26387 = (state_26386[(1)]);
if((state_val_26387 === (7))){
var inst_26340 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26340)){
var statearr_26395_27700 = state_26386__$1;
(statearr_26395_27700[(1)] = (8));

} else {
var statearr_26396_27701 = state_26386__$1;
(statearr_26396_27701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (20))){
var inst_26333 = (state_26386[(7)]);
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26386__$1,(23),out,inst_26333);
} else {
if((state_val_26387 === (1))){
var inst_26316 = calc_state();
var inst_26317 = cljs.core.__destructure_map(inst_26316);
var inst_26318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26317,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26317,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26317,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26321 = inst_26316;
var state_26386__$1 = (function (){var statearr_26397 = state_26386;
(statearr_26397[(8)] = inst_26318);

(statearr_26397[(9)] = inst_26319);

(statearr_26397[(10)] = inst_26320);

(statearr_26397[(11)] = inst_26321);

return statearr_26397;
})();
var statearr_26398_27705 = state_26386__$1;
(statearr_26398_27705[(2)] = null);

(statearr_26398_27705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (24))){
var inst_26324 = (state_26386[(12)]);
var inst_26321 = inst_26324;
var state_26386__$1 = (function (){var statearr_26399 = state_26386;
(statearr_26399[(11)] = inst_26321);

return statearr_26399;
})();
var statearr_26400_27706 = state_26386__$1;
(statearr_26400_27706[(2)] = null);

(statearr_26400_27706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (4))){
var inst_26333 = (state_26386[(7)]);
var inst_26335 = (state_26386[(13)]);
var inst_26332 = (state_26386[(2)]);
var inst_26333__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26332,(0),null);
var inst_26334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26332,(1),null);
var inst_26335__$1 = (inst_26333__$1 == null);
var state_26386__$1 = (function (){var statearr_26401 = state_26386;
(statearr_26401[(7)] = inst_26333__$1);

(statearr_26401[(14)] = inst_26334);

(statearr_26401[(13)] = inst_26335__$1);

return statearr_26401;
})();
if(cljs.core.truth_(inst_26335__$1)){
var statearr_26402_27709 = state_26386__$1;
(statearr_26402_27709[(1)] = (5));

} else {
var statearr_26403_27710 = state_26386__$1;
(statearr_26403_27710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (15))){
var inst_26325 = (state_26386[(15)]);
var inst_26354 = (state_26386[(16)]);
var inst_26354__$1 = cljs.core.empty_QMARK_(inst_26325);
var state_26386__$1 = (function (){var statearr_26404 = state_26386;
(statearr_26404[(16)] = inst_26354__$1);

return statearr_26404;
})();
if(inst_26354__$1){
var statearr_26405_27711 = state_26386__$1;
(statearr_26405_27711[(1)] = (17));

} else {
var statearr_26406_27712 = state_26386__$1;
(statearr_26406_27712[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (21))){
var inst_26324 = (state_26386[(12)]);
var inst_26321 = inst_26324;
var state_26386__$1 = (function (){var statearr_26407 = state_26386;
(statearr_26407[(11)] = inst_26321);

return statearr_26407;
})();
var statearr_26408_27713 = state_26386__$1;
(statearr_26408_27713[(2)] = null);

(statearr_26408_27713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (13))){
var inst_26347 = (state_26386[(2)]);
var inst_26348 = calc_state();
var inst_26321 = inst_26348;
var state_26386__$1 = (function (){var statearr_26409 = state_26386;
(statearr_26409[(17)] = inst_26347);

(statearr_26409[(11)] = inst_26321);

return statearr_26409;
})();
var statearr_26410_27714 = state_26386__$1;
(statearr_26410_27714[(2)] = null);

(statearr_26410_27714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (22))){
var inst_26374 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26412_27715 = state_26386__$1;
(statearr_26412_27715[(2)] = inst_26374);

(statearr_26412_27715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (6))){
var inst_26334 = (state_26386[(14)]);
var inst_26338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26334,change);
var state_26386__$1 = state_26386;
var statearr_26413_27716 = state_26386__$1;
(statearr_26413_27716[(2)] = inst_26338);

(statearr_26413_27716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (25))){
var state_26386__$1 = state_26386;
var statearr_26414_27717 = state_26386__$1;
(statearr_26414_27717[(2)] = null);

(statearr_26414_27717[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (17))){
var inst_26326 = (state_26386[(18)]);
var inst_26334 = (state_26386[(14)]);
var inst_26356 = (inst_26326.cljs$core$IFn$_invoke$arity$1 ? inst_26326.cljs$core$IFn$_invoke$arity$1(inst_26334) : inst_26326.call(null,inst_26334));
var inst_26357 = cljs.core.not(inst_26356);
var state_26386__$1 = state_26386;
var statearr_26415_27718 = state_26386__$1;
(statearr_26415_27718[(2)] = inst_26357);

(statearr_26415_27718[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (3))){
var inst_26378 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26386__$1,inst_26378);
} else {
if((state_val_26387 === (12))){
var state_26386__$1 = state_26386;
var statearr_26416_27719 = state_26386__$1;
(statearr_26416_27719[(2)] = null);

(statearr_26416_27719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (2))){
var inst_26321 = (state_26386[(11)]);
var inst_26324 = (state_26386[(12)]);
var inst_26324__$1 = cljs.core.__destructure_map(inst_26321);
var inst_26325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26324__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26324__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26324__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26386__$1 = (function (){var statearr_26417 = state_26386;
(statearr_26417[(12)] = inst_26324__$1);

(statearr_26417[(15)] = inst_26325);

(statearr_26417[(18)] = inst_26326);

return statearr_26417;
})();
return cljs.core.async.ioc_alts_BANG_(state_26386__$1,(4),inst_26327);
} else {
if((state_val_26387 === (23))){
var inst_26365 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26365)){
var statearr_26420_27723 = state_26386__$1;
(statearr_26420_27723[(1)] = (24));

} else {
var statearr_26421_27724 = state_26386__$1;
(statearr_26421_27724[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (19))){
var inst_26360 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26422_27725 = state_26386__$1;
(statearr_26422_27725[(2)] = inst_26360);

(statearr_26422_27725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (11))){
var inst_26334 = (state_26386[(14)]);
var inst_26344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26334);
var state_26386__$1 = state_26386;
var statearr_26423_27726 = state_26386__$1;
(statearr_26423_27726[(2)] = inst_26344);

(statearr_26423_27726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (9))){
var inst_26325 = (state_26386[(15)]);
var inst_26334 = (state_26386[(14)]);
var inst_26351 = (state_26386[(19)]);
var inst_26351__$1 = (inst_26325.cljs$core$IFn$_invoke$arity$1 ? inst_26325.cljs$core$IFn$_invoke$arity$1(inst_26334) : inst_26325.call(null,inst_26334));
var state_26386__$1 = (function (){var statearr_26424 = state_26386;
(statearr_26424[(19)] = inst_26351__$1);

return statearr_26424;
})();
if(cljs.core.truth_(inst_26351__$1)){
var statearr_26425_27728 = state_26386__$1;
(statearr_26425_27728[(1)] = (14));

} else {
var statearr_26426_27729 = state_26386__$1;
(statearr_26426_27729[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (5))){
var inst_26335 = (state_26386[(13)]);
var state_26386__$1 = state_26386;
var statearr_26429_27730 = state_26386__$1;
(statearr_26429_27730[(2)] = inst_26335);

(statearr_26429_27730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (14))){
var inst_26351 = (state_26386[(19)]);
var state_26386__$1 = state_26386;
var statearr_26430_27731 = state_26386__$1;
(statearr_26430_27731[(2)] = inst_26351);

(statearr_26430_27731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (26))){
var inst_26370 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26431_27732 = state_26386__$1;
(statearr_26431_27732[(2)] = inst_26370);

(statearr_26431_27732[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (16))){
var inst_26362 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26362)){
var statearr_26432_27733 = state_26386__$1;
(statearr_26432_27733[(1)] = (20));

} else {
var statearr_26433_27734 = state_26386__$1;
(statearr_26433_27734[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (10))){
var inst_26376 = (state_26386[(2)]);
var state_26386__$1 = state_26386;
var statearr_26434_27735 = state_26386__$1;
(statearr_26434_27735[(2)] = inst_26376);

(statearr_26434_27735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (18))){
var inst_26354 = (state_26386[(16)]);
var state_26386__$1 = state_26386;
var statearr_26435_27736 = state_26386__$1;
(statearr_26435_27736[(2)] = inst_26354);

(statearr_26435_27736[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26387 === (8))){
var inst_26333 = (state_26386[(7)]);
var inst_26342 = (inst_26333 == null);
var state_26386__$1 = state_26386;
if(cljs.core.truth_(inst_26342)){
var statearr_26436_27737 = state_26386__$1;
(statearr_26436_27737[(1)] = (11));

} else {
var statearr_26437_27738 = state_26386__$1;
(statearr_26437_27738[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__24509__auto__ = null;
var cljs$core$async$mix_$_state_machine__24509__auto____0 = (function (){
var statearr_26438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26438[(0)] = cljs$core$async$mix_$_state_machine__24509__auto__);

(statearr_26438[(1)] = (1));

return statearr_26438;
});
var cljs$core$async$mix_$_state_machine__24509__auto____1 = (function (state_26386){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_26386);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e26439){var ex__24512__auto__ = e26439;
var statearr_26440_27740 = state_26386;
(statearr_26440_27740[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_26386[(4)]))){
var statearr_26441_27741 = state_26386;
(statearr_26441_27741[(1)] = cljs.core.first((state_26386[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27742 = state_26386;
state_26386 = G__27742;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24509__auto__ = function(state_26386){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24509__auto____1.call(this,state_26386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24509__auto____0;
cljs$core$async$mix_$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24509__auto____1;
return cljs$core$async$mix_$_state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_26442 = f__24601__auto__();
(statearr_26442[(6)] = c__24600__auto___27699);

return statearr_26442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27743 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27743(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27747 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27747(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27748 = (function() {
var G__27749 = null;
var G__27749__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__27749__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__27749 = function(p,v){
switch(arguments.length){
case 1:
return G__27749__1.call(this,p);
case 2:
return G__27749__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27749.cljs$core$IFn$_invoke$arity$1 = G__27749__1;
G__27749.cljs$core$IFn$_invoke$arity$2 = G__27749__2;
return G__27749;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26454 = arguments.length;
switch (G__26454) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27748(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27748(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26461 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26462){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26462 = meta26462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26463,meta26462__$1){
var self__ = this;
var _26463__$1 = this;
return (new cljs.core.async.t_cljs$core$async26461(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26462__$1));
}));

(cljs.core.async.t_cljs$core$async26461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26463){
var self__ = this;
var _26463__$1 = this;
return self__.meta26462;
}));

(cljs.core.async.t_cljs$core$async26461.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26461.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26461.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26461.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async26461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26461.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26462","meta26462",1096584534,null)], null);
}));

(cljs.core.async.t_cljs$core$async26461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26461");

(cljs.core.async.t_cljs$core$async26461.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async26461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26461.
 */
cljs.core.async.__GT_t_cljs$core$async26461 = (function cljs$core$async$__GT_t_cljs$core$async26461(ch,topic_fn,buf_fn,mults,ensure_mult,meta26462){
return (new cljs.core.async.t_cljs$core$async26461(ch,topic_fn,buf_fn,mults,ensure_mult,meta26462));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26458 = arguments.length;
switch (G__26458) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__26456_SHARP_){
if(cljs.core.truth_((p1__26456_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26456_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26456_SHARP_.call(null,topic)))){
return p1__26456_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26456_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async26461(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__24600__auto___27762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_26546){
var state_val_26547 = (state_26546[(1)]);
if((state_val_26547 === (7))){
var inst_26542 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
var statearr_26558_27763 = state_26546__$1;
(statearr_26558_27763[(2)] = inst_26542);

(statearr_26558_27763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (20))){
var state_26546__$1 = state_26546;
var statearr_26563_27764 = state_26546__$1;
(statearr_26563_27764[(2)] = null);

(statearr_26563_27764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (1))){
var state_26546__$1 = state_26546;
var statearr_26564_27765 = state_26546__$1;
(statearr_26564_27765[(2)] = null);

(statearr_26564_27765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (24))){
var inst_26525 = (state_26546[(7)]);
var inst_26534 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26525);
var state_26546__$1 = state_26546;
var statearr_26565_27766 = state_26546__$1;
(statearr_26565_27766[(2)] = inst_26534);

(statearr_26565_27766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (4))){
var inst_26467 = (state_26546[(8)]);
var inst_26467__$1 = (state_26546[(2)]);
var inst_26468 = (inst_26467__$1 == null);
var state_26546__$1 = (function (){var statearr_26566 = state_26546;
(statearr_26566[(8)] = inst_26467__$1);

return statearr_26566;
})();
if(cljs.core.truth_(inst_26468)){
var statearr_26567_27767 = state_26546__$1;
(statearr_26567_27767[(1)] = (5));

} else {
var statearr_26568_27768 = state_26546__$1;
(statearr_26568_27768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (15))){
var inst_26517 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
var statearr_26569_27769 = state_26546__$1;
(statearr_26569_27769[(2)] = inst_26517);

(statearr_26569_27769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (21))){
var inst_26539 = (state_26546[(2)]);
var state_26546__$1 = (function (){var statearr_26570 = state_26546;
(statearr_26570[(9)] = inst_26539);

return statearr_26570;
})();
var statearr_26571_27770 = state_26546__$1;
(statearr_26571_27770[(2)] = null);

(statearr_26571_27770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (13))){
var inst_26497 = (state_26546[(10)]);
var inst_26500 = cljs.core.chunked_seq_QMARK_(inst_26497);
var state_26546__$1 = state_26546;
if(inst_26500){
var statearr_26572_27771 = state_26546__$1;
(statearr_26572_27771[(1)] = (16));

} else {
var statearr_26575_27772 = state_26546__$1;
(statearr_26575_27772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (22))){
var inst_26531 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
if(cljs.core.truth_(inst_26531)){
var statearr_26577_27773 = state_26546__$1;
(statearr_26577_27773[(1)] = (23));

} else {
var statearr_26578_27774 = state_26546__$1;
(statearr_26578_27774[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (6))){
var inst_26467 = (state_26546[(8)]);
var inst_26525 = (state_26546[(7)]);
var inst_26527 = (state_26546[(11)]);
var inst_26525__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26467) : topic_fn.call(null,inst_26467));
var inst_26526 = cljs.core.deref(mults);
var inst_26527__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26526,inst_26525__$1);
var state_26546__$1 = (function (){var statearr_26579 = state_26546;
(statearr_26579[(7)] = inst_26525__$1);

(statearr_26579[(11)] = inst_26527__$1);

return statearr_26579;
})();
if(cljs.core.truth_(inst_26527__$1)){
var statearr_26580_27775 = state_26546__$1;
(statearr_26580_27775[(1)] = (19));

} else {
var statearr_26581_27776 = state_26546__$1;
(statearr_26581_27776[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (25))){
var inst_26536 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
var statearr_26582_27777 = state_26546__$1;
(statearr_26582_27777[(2)] = inst_26536);

(statearr_26582_27777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (17))){
var inst_26497 = (state_26546[(10)]);
var inst_26508 = cljs.core.first(inst_26497);
var inst_26509 = cljs.core.async.muxch_STAR_(inst_26508);
var inst_26510 = cljs.core.async.close_BANG_(inst_26509);
var inst_26511 = cljs.core.next(inst_26497);
var inst_26478 = inst_26511;
var inst_26479 = null;
var inst_26480 = (0);
var inst_26481 = (0);
var state_26546__$1 = (function (){var statearr_26584 = state_26546;
(statearr_26584[(12)] = inst_26510);

(statearr_26584[(13)] = inst_26478);

(statearr_26584[(14)] = inst_26479);

(statearr_26584[(15)] = inst_26480);

(statearr_26584[(16)] = inst_26481);

return statearr_26584;
})();
var statearr_26585_27778 = state_26546__$1;
(statearr_26585_27778[(2)] = null);

(statearr_26585_27778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (3))){
var inst_26544 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26546__$1,inst_26544);
} else {
if((state_val_26547 === (12))){
var inst_26519 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
var statearr_26587_27779 = state_26546__$1;
(statearr_26587_27779[(2)] = inst_26519);

(statearr_26587_27779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (2))){
var state_26546__$1 = state_26546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26546__$1,(4),ch);
} else {
if((state_val_26547 === (23))){
var state_26546__$1 = state_26546;
var statearr_26588_27780 = state_26546__$1;
(statearr_26588_27780[(2)] = null);

(statearr_26588_27780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (19))){
var inst_26527 = (state_26546[(11)]);
var inst_26467 = (state_26546[(8)]);
var inst_26529 = cljs.core.async.muxch_STAR_(inst_26527);
var state_26546__$1 = state_26546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26546__$1,(22),inst_26529,inst_26467);
} else {
if((state_val_26547 === (11))){
var inst_26478 = (state_26546[(13)]);
var inst_26497 = (state_26546[(10)]);
var inst_26497__$1 = cljs.core.seq(inst_26478);
var state_26546__$1 = (function (){var statearr_26589 = state_26546;
(statearr_26589[(10)] = inst_26497__$1);

return statearr_26589;
})();
if(inst_26497__$1){
var statearr_26590_27781 = state_26546__$1;
(statearr_26590_27781[(1)] = (13));

} else {
var statearr_26591_27782 = state_26546__$1;
(statearr_26591_27782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (9))){
var inst_26521 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
var statearr_26592_27783 = state_26546__$1;
(statearr_26592_27783[(2)] = inst_26521);

(statearr_26592_27783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (5))){
var inst_26475 = cljs.core.deref(mults);
var inst_26476 = cljs.core.vals(inst_26475);
var inst_26477 = cljs.core.seq(inst_26476);
var inst_26478 = inst_26477;
var inst_26479 = null;
var inst_26480 = (0);
var inst_26481 = (0);
var state_26546__$1 = (function (){var statearr_26593 = state_26546;
(statearr_26593[(13)] = inst_26478);

(statearr_26593[(14)] = inst_26479);

(statearr_26593[(15)] = inst_26480);

(statearr_26593[(16)] = inst_26481);

return statearr_26593;
})();
var statearr_26594_27784 = state_26546__$1;
(statearr_26594_27784[(2)] = null);

(statearr_26594_27784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (14))){
var state_26546__$1 = state_26546;
var statearr_26598_27785 = state_26546__$1;
(statearr_26598_27785[(2)] = null);

(statearr_26598_27785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (16))){
var inst_26497 = (state_26546[(10)]);
var inst_26503 = cljs.core.chunk_first(inst_26497);
var inst_26504 = cljs.core.chunk_rest(inst_26497);
var inst_26505 = cljs.core.count(inst_26503);
var inst_26478 = inst_26504;
var inst_26479 = inst_26503;
var inst_26480 = inst_26505;
var inst_26481 = (0);
var state_26546__$1 = (function (){var statearr_26599 = state_26546;
(statearr_26599[(13)] = inst_26478);

(statearr_26599[(14)] = inst_26479);

(statearr_26599[(15)] = inst_26480);

(statearr_26599[(16)] = inst_26481);

return statearr_26599;
})();
var statearr_26601_27786 = state_26546__$1;
(statearr_26601_27786[(2)] = null);

(statearr_26601_27786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (10))){
var inst_26479 = (state_26546[(14)]);
var inst_26481 = (state_26546[(16)]);
var inst_26478 = (state_26546[(13)]);
var inst_26480 = (state_26546[(15)]);
var inst_26488 = cljs.core._nth(inst_26479,inst_26481);
var inst_26489 = cljs.core.async.muxch_STAR_(inst_26488);
var inst_26490 = cljs.core.async.close_BANG_(inst_26489);
var inst_26491 = (inst_26481 + (1));
var tmp26595 = inst_26479;
var tmp26596 = inst_26478;
var tmp26597 = inst_26480;
var inst_26478__$1 = tmp26596;
var inst_26479__$1 = tmp26595;
var inst_26480__$1 = tmp26597;
var inst_26481__$1 = inst_26491;
var state_26546__$1 = (function (){var statearr_26604 = state_26546;
(statearr_26604[(17)] = inst_26490);

(statearr_26604[(13)] = inst_26478__$1);

(statearr_26604[(14)] = inst_26479__$1);

(statearr_26604[(15)] = inst_26480__$1);

(statearr_26604[(16)] = inst_26481__$1);

return statearr_26604;
})();
var statearr_26605_27787 = state_26546__$1;
(statearr_26605_27787[(2)] = null);

(statearr_26605_27787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (18))){
var inst_26514 = (state_26546[(2)]);
var state_26546__$1 = state_26546;
var statearr_26606_27788 = state_26546__$1;
(statearr_26606_27788[(2)] = inst_26514);

(statearr_26606_27788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26547 === (8))){
var inst_26481 = (state_26546[(16)]);
var inst_26480 = (state_26546[(15)]);
var inst_26483 = (inst_26481 < inst_26480);
var inst_26484 = inst_26483;
var state_26546__$1 = state_26546;
if(cljs.core.truth_(inst_26484)){
var statearr_26607_27789 = state_26546__$1;
(statearr_26607_27789[(1)] = (10));

} else {
var statearr_26608_27790 = state_26546__$1;
(statearr_26608_27790[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_26612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26612[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_26612[(1)] = (1));

return statearr_26612;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_26546){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_26546);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e26614){var ex__24512__auto__ = e26614;
var statearr_26615_27791 = state_26546;
(statearr_26615_27791[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_26546[(4)]))){
var statearr_26617_27792 = state_26546;
(statearr_26617_27792[(1)] = cljs.core.first((state_26546[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27793 = state_26546;
state_26546 = G__27793;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_26546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_26546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_26620 = f__24601__auto__();
(statearr_26620[(6)] = c__24600__auto___27762);

return statearr_26620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26627 = arguments.length;
switch (G__26627) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26630 = arguments.length;
switch (G__26630) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26634 = arguments.length;
switch (G__26634) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__24600__auto___27797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_26687){
var state_val_26688 = (state_26687[(1)]);
if((state_val_26688 === (7))){
var state_26687__$1 = state_26687;
var statearr_26689_27798 = state_26687__$1;
(statearr_26689_27798[(2)] = null);

(statearr_26689_27798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (1))){
var state_26687__$1 = state_26687;
var statearr_26690_27799 = state_26687__$1;
(statearr_26690_27799[(2)] = null);

(statearr_26690_27799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (4))){
var inst_26646 = (state_26687[(7)]);
var inst_26644 = (state_26687[(8)]);
var inst_26649 = (inst_26646 < inst_26644);
var state_26687__$1 = state_26687;
if(cljs.core.truth_(inst_26649)){
var statearr_26691_27800 = state_26687__$1;
(statearr_26691_27800[(1)] = (6));

} else {
var statearr_26692_27801 = state_26687__$1;
(statearr_26692_27801[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (15))){
var inst_26673 = (state_26687[(9)]);
var inst_26678 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26673);
var state_26687__$1 = state_26687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26687__$1,(17),out,inst_26678);
} else {
if((state_val_26688 === (13))){
var inst_26673 = (state_26687[(9)]);
var inst_26673__$1 = (state_26687[(2)]);
var inst_26674 = cljs.core.some(cljs.core.nil_QMARK_,inst_26673__$1);
var state_26687__$1 = (function (){var statearr_26693 = state_26687;
(statearr_26693[(9)] = inst_26673__$1);

return statearr_26693;
})();
if(cljs.core.truth_(inst_26674)){
var statearr_26694_27802 = state_26687__$1;
(statearr_26694_27802[(1)] = (14));

} else {
var statearr_26697_27803 = state_26687__$1;
(statearr_26697_27803[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (6))){
var state_26687__$1 = state_26687;
var statearr_26698_27804 = state_26687__$1;
(statearr_26698_27804[(2)] = null);

(statearr_26698_27804[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (17))){
var inst_26680 = (state_26687[(2)]);
var state_26687__$1 = (function (){var statearr_26702 = state_26687;
(statearr_26702[(10)] = inst_26680);

return statearr_26702;
})();
var statearr_26703_27805 = state_26687__$1;
(statearr_26703_27805[(2)] = null);

(statearr_26703_27805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (3))){
var inst_26685 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26687__$1,inst_26685);
} else {
if((state_val_26688 === (12))){
var _ = (function (){var statearr_26704 = state_26687;
(statearr_26704[(4)] = cljs.core.rest((state_26687[(4)])));

return statearr_26704;
})();
var state_26687__$1 = state_26687;
var ex26700 = (state_26687__$1[(2)]);
var statearr_26705_27806 = state_26687__$1;
(statearr_26705_27806[(5)] = ex26700);


if((ex26700 instanceof Object)){
var statearr_26706_27807 = state_26687__$1;
(statearr_26706_27807[(1)] = (11));

(statearr_26706_27807[(5)] = null);

} else {
throw ex26700;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (2))){
var inst_26642 = cljs.core.reset_BANG_(dctr,cnt);
var inst_26644 = cnt;
var inst_26646 = (0);
var state_26687__$1 = (function (){var statearr_26708 = state_26687;
(statearr_26708[(11)] = inst_26642);

(statearr_26708[(8)] = inst_26644);

(statearr_26708[(7)] = inst_26646);

return statearr_26708;
})();
var statearr_26709_27808 = state_26687__$1;
(statearr_26709_27808[(2)] = null);

(statearr_26709_27808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (11))){
var inst_26651 = (state_26687[(2)]);
var inst_26652 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26687__$1 = (function (){var statearr_26710 = state_26687;
(statearr_26710[(12)] = inst_26651);

return statearr_26710;
})();
var statearr_26711_27809 = state_26687__$1;
(statearr_26711_27809[(2)] = inst_26652);

(statearr_26711_27809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (9))){
var inst_26646 = (state_26687[(7)]);
var _ = (function (){var statearr_26712 = state_26687;
(statearr_26712[(4)] = cljs.core.cons((12),(state_26687[(4)])));

return statearr_26712;
})();
var inst_26659 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26646) : chs__$1.call(null,inst_26646));
var inst_26660 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26646) : done.call(null,inst_26646));
var inst_26661 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26659,inst_26660);
var ___$1 = (function (){var statearr_26713 = state_26687;
(statearr_26713[(4)] = cljs.core.rest((state_26687[(4)])));

return statearr_26713;
})();
var state_26687__$1 = state_26687;
var statearr_26714_27810 = state_26687__$1;
(statearr_26714_27810[(2)] = inst_26661);

(statearr_26714_27810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (5))){
var inst_26671 = (state_26687[(2)]);
var state_26687__$1 = (function (){var statearr_26715 = state_26687;
(statearr_26715[(13)] = inst_26671);

return statearr_26715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26687__$1,(13),dchan);
} else {
if((state_val_26688 === (14))){
var inst_26676 = cljs.core.async.close_BANG_(out);
var state_26687__$1 = state_26687;
var statearr_26717_27811 = state_26687__$1;
(statearr_26717_27811[(2)] = inst_26676);

(statearr_26717_27811[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (16))){
var inst_26683 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
var statearr_26719_27812 = state_26687__$1;
(statearr_26719_27812[(2)] = inst_26683);

(statearr_26719_27812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (10))){
var inst_26646 = (state_26687[(7)]);
var inst_26664 = (state_26687[(2)]);
var inst_26665 = (inst_26646 + (1));
var inst_26646__$1 = inst_26665;
var state_26687__$1 = (function (){var statearr_26721 = state_26687;
(statearr_26721[(14)] = inst_26664);

(statearr_26721[(7)] = inst_26646__$1);

return statearr_26721;
})();
var statearr_26722_27813 = state_26687__$1;
(statearr_26722_27813[(2)] = null);

(statearr_26722_27813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26688 === (8))){
var inst_26669 = (state_26687[(2)]);
var state_26687__$1 = state_26687;
var statearr_26723_27814 = state_26687__$1;
(statearr_26723_27814[(2)] = inst_26669);

(statearr_26723_27814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_26727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26727[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_26727[(1)] = (1));

return statearr_26727;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_26687){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_26687);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e26728){var ex__24512__auto__ = e26728;
var statearr_26729_27815 = state_26687;
(statearr_26729_27815[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_26687[(4)]))){
var statearr_26731_27816 = state_26687;
(statearr_26731_27816[(1)] = cljs.core.first((state_26687[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27817 = state_26687;
state_26687 = G__27817;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_26687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_26687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_26734 = f__24601__auto__();
(statearr_26734[(6)] = c__24600__auto___27797);

return statearr_26734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26740 = arguments.length;
switch (G__26740) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24600__auto___27821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_26774){
var state_val_26775 = (state_26774[(1)]);
if((state_val_26775 === (7))){
var inst_26753 = (state_26774[(7)]);
var inst_26754 = (state_26774[(8)]);
var inst_26753__$1 = (state_26774[(2)]);
var inst_26754__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26753__$1,(0),null);
var inst_26755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26753__$1,(1),null);
var inst_26756 = (inst_26754__$1 == null);
var state_26774__$1 = (function (){var statearr_26782 = state_26774;
(statearr_26782[(7)] = inst_26753__$1);

(statearr_26782[(8)] = inst_26754__$1);

(statearr_26782[(9)] = inst_26755);

return statearr_26782;
})();
if(cljs.core.truth_(inst_26756)){
var statearr_26783_27825 = state_26774__$1;
(statearr_26783_27825[(1)] = (8));

} else {
var statearr_26784_27826 = state_26774__$1;
(statearr_26784_27826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (1))){
var inst_26743 = cljs.core.vec(chs);
var inst_26744 = inst_26743;
var state_26774__$1 = (function (){var statearr_26785 = state_26774;
(statearr_26785[(10)] = inst_26744);

return statearr_26785;
})();
var statearr_26786_27827 = state_26774__$1;
(statearr_26786_27827[(2)] = null);

(statearr_26786_27827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (4))){
var inst_26744 = (state_26774[(10)]);
var state_26774__$1 = state_26774;
return cljs.core.async.ioc_alts_BANG_(state_26774__$1,(7),inst_26744);
} else {
if((state_val_26775 === (6))){
var inst_26770 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26787_27828 = state_26774__$1;
(statearr_26787_27828[(2)] = inst_26770);

(statearr_26787_27828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (3))){
var inst_26772 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26774__$1,inst_26772);
} else {
if((state_val_26775 === (2))){
var inst_26744 = (state_26774[(10)]);
var inst_26746 = cljs.core.count(inst_26744);
var inst_26747 = (inst_26746 > (0));
var state_26774__$1 = state_26774;
if(cljs.core.truth_(inst_26747)){
var statearr_26790_27829 = state_26774__$1;
(statearr_26790_27829[(1)] = (4));

} else {
var statearr_26791_27830 = state_26774__$1;
(statearr_26791_27830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (11))){
var inst_26744 = (state_26774[(10)]);
var inst_26763 = (state_26774[(2)]);
var tmp26788 = inst_26744;
var inst_26744__$1 = tmp26788;
var state_26774__$1 = (function (){var statearr_26792 = state_26774;
(statearr_26792[(11)] = inst_26763);

(statearr_26792[(10)] = inst_26744__$1);

return statearr_26792;
})();
var statearr_26793_27831 = state_26774__$1;
(statearr_26793_27831[(2)] = null);

(statearr_26793_27831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (9))){
var inst_26754 = (state_26774[(8)]);
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26774__$1,(11),out,inst_26754);
} else {
if((state_val_26775 === (5))){
var inst_26768 = cljs.core.async.close_BANG_(out);
var state_26774__$1 = state_26774;
var statearr_26798_27832 = state_26774__$1;
(statearr_26798_27832[(2)] = inst_26768);

(statearr_26798_27832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (10))){
var inst_26766 = (state_26774[(2)]);
var state_26774__$1 = state_26774;
var statearr_26799_27833 = state_26774__$1;
(statearr_26799_27833[(2)] = inst_26766);

(statearr_26799_27833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26775 === (8))){
var inst_26744 = (state_26774[(10)]);
var inst_26753 = (state_26774[(7)]);
var inst_26754 = (state_26774[(8)]);
var inst_26755 = (state_26774[(9)]);
var inst_26758 = (function (){var cs = inst_26744;
var vec__26749 = inst_26753;
var v = inst_26754;
var c = inst_26755;
return (function (p1__26737_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26737_SHARP_);
});
})();
var inst_26759 = cljs.core.filterv(inst_26758,inst_26744);
var inst_26744__$1 = inst_26759;
var state_26774__$1 = (function (){var statearr_26802 = state_26774;
(statearr_26802[(10)] = inst_26744__$1);

return statearr_26802;
})();
var statearr_26803_27834 = state_26774__$1;
(statearr_26803_27834[(2)] = null);

(statearr_26803_27834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_26810 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26810[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_26810[(1)] = (1));

return statearr_26810;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_26774){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_26774);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e26811){var ex__24512__auto__ = e26811;
var statearr_26812_27835 = state_26774;
(statearr_26812_27835[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_26774[(4)]))){
var statearr_26814_27836 = state_26774;
(statearr_26814_27836[(1)] = cljs.core.first((state_26774[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27837 = state_26774;
state_26774 = G__27837;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_26774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_26774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_26815 = f__24601__auto__();
(statearr_26815[(6)] = c__24600__auto___27821);

return statearr_26815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26822 = arguments.length;
switch (G__26822) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24600__auto___27839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_26849){
var state_val_26850 = (state_26849[(1)]);
if((state_val_26850 === (7))){
var inst_26831 = (state_26849[(7)]);
var inst_26831__$1 = (state_26849[(2)]);
var inst_26832 = (inst_26831__$1 == null);
var inst_26833 = cljs.core.not(inst_26832);
var state_26849__$1 = (function (){var statearr_26854 = state_26849;
(statearr_26854[(7)] = inst_26831__$1);

return statearr_26854;
})();
if(inst_26833){
var statearr_26855_27841 = state_26849__$1;
(statearr_26855_27841[(1)] = (8));

} else {
var statearr_26856_27843 = state_26849__$1;
(statearr_26856_27843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (1))){
var inst_26826 = (0);
var state_26849__$1 = (function (){var statearr_26857 = state_26849;
(statearr_26857[(8)] = inst_26826);

return statearr_26857;
})();
var statearr_26858_27844 = state_26849__$1;
(statearr_26858_27844[(2)] = null);

(statearr_26858_27844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (4))){
var state_26849__$1 = state_26849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26849__$1,(7),ch);
} else {
if((state_val_26850 === (6))){
var inst_26844 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26859_27845 = state_26849__$1;
(statearr_26859_27845[(2)] = inst_26844);

(statearr_26859_27845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (3))){
var inst_26846 = (state_26849[(2)]);
var inst_26847 = cljs.core.async.close_BANG_(out);
var state_26849__$1 = (function (){var statearr_26860 = state_26849;
(statearr_26860[(9)] = inst_26846);

return statearr_26860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26849__$1,inst_26847);
} else {
if((state_val_26850 === (2))){
var inst_26826 = (state_26849[(8)]);
var inst_26828 = (inst_26826 < n);
var state_26849__$1 = state_26849;
if(cljs.core.truth_(inst_26828)){
var statearr_26861_27846 = state_26849__$1;
(statearr_26861_27846[(1)] = (4));

} else {
var statearr_26862_27847 = state_26849__$1;
(statearr_26862_27847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (11))){
var inst_26826 = (state_26849[(8)]);
var inst_26836 = (state_26849[(2)]);
var inst_26837 = (inst_26826 + (1));
var inst_26826__$1 = inst_26837;
var state_26849__$1 = (function (){var statearr_26863 = state_26849;
(statearr_26863[(10)] = inst_26836);

(statearr_26863[(8)] = inst_26826__$1);

return statearr_26863;
})();
var statearr_26864_27848 = state_26849__$1;
(statearr_26864_27848[(2)] = null);

(statearr_26864_27848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (9))){
var state_26849__$1 = state_26849;
var statearr_26866_27849 = state_26849__$1;
(statearr_26866_27849[(2)] = null);

(statearr_26866_27849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (5))){
var state_26849__$1 = state_26849;
var statearr_26868_27850 = state_26849__$1;
(statearr_26868_27850[(2)] = null);

(statearr_26868_27850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (10))){
var inst_26841 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26869_27851 = state_26849__$1;
(statearr_26869_27851[(2)] = inst_26841);

(statearr_26869_27851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (8))){
var inst_26831 = (state_26849[(7)]);
var state_26849__$1 = state_26849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26849__$1,(11),out,inst_26831);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_26872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26872[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_26872[(1)] = (1));

return statearr_26872;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_26849){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_26849);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e26874){var ex__24512__auto__ = e26874;
var statearr_26875_27852 = state_26849;
(statearr_26875_27852[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_26849[(4)]))){
var statearr_26876_27853 = state_26849;
(statearr_26876_27853[(1)] = cljs.core.first((state_26849[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27858 = state_26849;
state_26849 = G__27858;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_26849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_26849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_26880 = f__24601__auto__();
(statearr_26880[(6)] = c__24600__auto___27839);

return statearr_26880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26888 = (function (f,ch,meta26885,_,fn1,meta26889){
this.f = f;
this.ch = ch;
this.meta26885 = meta26885;
this._ = _;
this.fn1 = fn1;
this.meta26889 = meta26889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26890,meta26889__$1){
var self__ = this;
var _26890__$1 = this;
return (new cljs.core.async.t_cljs$core$async26888(self__.f,self__.ch,self__.meta26885,self__._,self__.fn1,meta26889__$1));
}));

(cljs.core.async.t_cljs$core$async26888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26890){
var self__ = this;
var _26890__$1 = this;
return self__.meta26889;
}));

(cljs.core.async.t_cljs$core$async26888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__26883_SHARP_){
var G__26892 = (((p1__26883_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26883_SHARP_) : self__.f.call(null,p1__26883_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26892) : f1.call(null,G__26892));
});
}));

(cljs.core.async.t_cljs$core$async26888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26885","meta26885",652494905,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26884","cljs.core.async/t_cljs$core$async26884",-371172788,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26889","meta26889",1510165789,null)], null);
}));

(cljs.core.async.t_cljs$core$async26888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26888");

(cljs.core.async.t_cljs$core$async26888.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async26888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26888.
 */
cljs.core.async.__GT_t_cljs$core$async26888 = (function cljs$core$async$__GT_t_cljs$core$async26888(f,ch,meta26885,_,fn1,meta26889){
return (new cljs.core.async.t_cljs$core$async26888(f,ch,meta26885,_,fn1,meta26889));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26884 = (function (f,ch,meta26885){
this.f = f;
this.ch = ch;
this.meta26885 = meta26885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26886,meta26885__$1){
var self__ = this;
var _26886__$1 = this;
return (new cljs.core.async.t_cljs$core$async26884(self__.f,self__.ch,meta26885__$1));
}));

(cljs.core.async.t_cljs$core$async26884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26886){
var self__ = this;
var _26886__$1 = this;
return self__.meta26885;
}));

(cljs.core.async.t_cljs$core$async26884.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26884.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26884.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26884.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26884.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async26888(self__.f,self__.ch,self__.meta26885,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26897 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26897) : self__.f.call(null,G__26897));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26884.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26884.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26885","meta26885",652494905,null)], null);
}));

(cljs.core.async.t_cljs$core$async26884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26884");

(cljs.core.async.t_cljs$core$async26884.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async26884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26884.
 */
cljs.core.async.__GT_t_cljs$core$async26884 = (function cljs$core$async$__GT_t_cljs$core$async26884(f,ch,meta26885){
return (new cljs.core.async.t_cljs$core$async26884(f,ch,meta26885));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async26884(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26898 = (function (f,ch,meta26899){
this.f = f;
this.ch = ch;
this.meta26899 = meta26899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26900,meta26899__$1){
var self__ = this;
var _26900__$1 = this;
return (new cljs.core.async.t_cljs$core$async26898(self__.f,self__.ch,meta26899__$1));
}));

(cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26900){
var self__ = this;
var _26900__$1 = this;
return self__.meta26899;
}));

(cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async26898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26899","meta26899",248798319,null)], null);
}));

(cljs.core.async.t_cljs$core$async26898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26898");

(cljs.core.async.t_cljs$core$async26898.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async26898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26898.
 */
cljs.core.async.__GT_t_cljs$core$async26898 = (function cljs$core$async$__GT_t_cljs$core$async26898(f,ch,meta26899){
return (new cljs.core.async.t_cljs$core$async26898(f,ch,meta26899));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async26898(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26909 = (function (p,ch,meta26910){
this.p = p;
this.ch = ch;
this.meta26910 = meta26910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26911,meta26910__$1){
var self__ = this;
var _26911__$1 = this;
return (new cljs.core.async.t_cljs$core$async26909(self__.p,self__.ch,meta26910__$1));
}));

(cljs.core.async.t_cljs$core$async26909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26911){
var self__ = this;
var _26911__$1 = this;
return self__.meta26910;
}));

(cljs.core.async.t_cljs$core$async26909.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26909.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26909.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26909.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26909.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26909.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26909.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26910","meta26910",392772893,null)], null);
}));

(cljs.core.async.t_cljs$core$async26909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26909");

(cljs.core.async.t_cljs$core$async26909.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async26909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26909.
 */
cljs.core.async.__GT_t_cljs$core$async26909 = (function cljs$core$async$__GT_t_cljs$core$async26909(p,ch,meta26910){
return (new cljs.core.async.t_cljs$core$async26909(p,ch,meta26910));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async26909(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26917 = arguments.length;
switch (G__26917) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24600__auto___27870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_26938){
var state_val_26939 = (state_26938[(1)]);
if((state_val_26939 === (7))){
var inst_26934 = (state_26938[(2)]);
var state_26938__$1 = state_26938;
var statearr_26940_27871 = state_26938__$1;
(statearr_26940_27871[(2)] = inst_26934);

(statearr_26940_27871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (1))){
var state_26938__$1 = state_26938;
var statearr_26941_27872 = state_26938__$1;
(statearr_26941_27872[(2)] = null);

(statearr_26941_27872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (4))){
var inst_26920 = (state_26938[(7)]);
var inst_26920__$1 = (state_26938[(2)]);
var inst_26921 = (inst_26920__$1 == null);
var state_26938__$1 = (function (){var statearr_26942 = state_26938;
(statearr_26942[(7)] = inst_26920__$1);

return statearr_26942;
})();
if(cljs.core.truth_(inst_26921)){
var statearr_26943_27873 = state_26938__$1;
(statearr_26943_27873[(1)] = (5));

} else {
var statearr_26944_27874 = state_26938__$1;
(statearr_26944_27874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (6))){
var inst_26920 = (state_26938[(7)]);
var inst_26925 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26920) : p.call(null,inst_26920));
var state_26938__$1 = state_26938;
if(cljs.core.truth_(inst_26925)){
var statearr_26945_27875 = state_26938__$1;
(statearr_26945_27875[(1)] = (8));

} else {
var statearr_26946_27876 = state_26938__$1;
(statearr_26946_27876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (3))){
var inst_26936 = (state_26938[(2)]);
var state_26938__$1 = state_26938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26938__$1,inst_26936);
} else {
if((state_val_26939 === (2))){
var state_26938__$1 = state_26938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26938__$1,(4),ch);
} else {
if((state_val_26939 === (11))){
var inst_26928 = (state_26938[(2)]);
var state_26938__$1 = state_26938;
var statearr_26947_27877 = state_26938__$1;
(statearr_26947_27877[(2)] = inst_26928);

(statearr_26947_27877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (9))){
var state_26938__$1 = state_26938;
var statearr_26948_27878 = state_26938__$1;
(statearr_26948_27878[(2)] = null);

(statearr_26948_27878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (5))){
var inst_26923 = cljs.core.async.close_BANG_(out);
var state_26938__$1 = state_26938;
var statearr_26949_27879 = state_26938__$1;
(statearr_26949_27879[(2)] = inst_26923);

(statearr_26949_27879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (10))){
var inst_26931 = (state_26938[(2)]);
var state_26938__$1 = (function (){var statearr_26950 = state_26938;
(statearr_26950[(8)] = inst_26931);

return statearr_26950;
})();
var statearr_26952_27880 = state_26938__$1;
(statearr_26952_27880[(2)] = null);

(statearr_26952_27880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26939 === (8))){
var inst_26920 = (state_26938[(7)]);
var state_26938__$1 = state_26938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26938__$1,(11),out,inst_26920);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_26954 = [null,null,null,null,null,null,null,null,null];
(statearr_26954[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_26954[(1)] = (1));

return statearr_26954;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_26938){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_26938);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e26955){var ex__24512__auto__ = e26955;
var statearr_26956_27881 = state_26938;
(statearr_26956_27881[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_26938[(4)]))){
var statearr_26957_27882 = state_26938;
(statearr_26957_27882[(1)] = cljs.core.first((state_26938[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27883 = state_26938;
state_26938 = G__27883;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_26938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_26938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_26958 = f__24601__auto__();
(statearr_26958[(6)] = c__24600__auto___27870);

return statearr_26958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26963 = arguments.length;
switch (G__26963) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24600__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_27032){
var state_val_27033 = (state_27032[(1)]);
if((state_val_27033 === (7))){
var inst_27028 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27035_27888 = state_27032__$1;
(statearr_27035_27888[(2)] = inst_27028);

(statearr_27035_27888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (20))){
var inst_26997 = (state_27032[(7)]);
var inst_27008 = (state_27032[(2)]);
var inst_27009 = cljs.core.next(inst_26997);
var inst_26983 = inst_27009;
var inst_26984 = null;
var inst_26985 = (0);
var inst_26986 = (0);
var state_27032__$1 = (function (){var statearr_27037 = state_27032;
(statearr_27037[(8)] = inst_27008);

(statearr_27037[(9)] = inst_26983);

(statearr_27037[(10)] = inst_26984);

(statearr_27037[(11)] = inst_26985);

(statearr_27037[(12)] = inst_26986);

return statearr_27037;
})();
var statearr_27038_27889 = state_27032__$1;
(statearr_27038_27889[(2)] = null);

(statearr_27038_27889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (1))){
var state_27032__$1 = state_27032;
var statearr_27039_27890 = state_27032__$1;
(statearr_27039_27890[(2)] = null);

(statearr_27039_27890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (4))){
var inst_26971 = (state_27032[(13)]);
var inst_26971__$1 = (state_27032[(2)]);
var inst_26972 = (inst_26971__$1 == null);
var state_27032__$1 = (function (){var statearr_27043 = state_27032;
(statearr_27043[(13)] = inst_26971__$1);

return statearr_27043;
})();
if(cljs.core.truth_(inst_26972)){
var statearr_27044_27891 = state_27032__$1;
(statearr_27044_27891[(1)] = (5));

} else {
var statearr_27045_27892 = state_27032__$1;
(statearr_27045_27892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (15))){
var state_27032__$1 = state_27032;
var statearr_27049_27893 = state_27032__$1;
(statearr_27049_27893[(2)] = null);

(statearr_27049_27893[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (21))){
var state_27032__$1 = state_27032;
var statearr_27050_27894 = state_27032__$1;
(statearr_27050_27894[(2)] = null);

(statearr_27050_27894[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (13))){
var inst_26986 = (state_27032[(12)]);
var inst_26983 = (state_27032[(9)]);
var inst_26984 = (state_27032[(10)]);
var inst_26985 = (state_27032[(11)]);
var inst_26993 = (state_27032[(2)]);
var inst_26994 = (inst_26986 + (1));
var tmp27046 = inst_26984;
var tmp27047 = inst_26983;
var tmp27048 = inst_26985;
var inst_26983__$1 = tmp27047;
var inst_26984__$1 = tmp27046;
var inst_26985__$1 = tmp27048;
var inst_26986__$1 = inst_26994;
var state_27032__$1 = (function (){var statearr_27051 = state_27032;
(statearr_27051[(14)] = inst_26993);

(statearr_27051[(9)] = inst_26983__$1);

(statearr_27051[(10)] = inst_26984__$1);

(statearr_27051[(11)] = inst_26985__$1);

(statearr_27051[(12)] = inst_26986__$1);

return statearr_27051;
})();
var statearr_27052_27895 = state_27032__$1;
(statearr_27052_27895[(2)] = null);

(statearr_27052_27895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (22))){
var state_27032__$1 = state_27032;
var statearr_27053_27896 = state_27032__$1;
(statearr_27053_27896[(2)] = null);

(statearr_27053_27896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (6))){
var inst_26971 = (state_27032[(13)]);
var inst_26981 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26971) : f.call(null,inst_26971));
var inst_26982 = cljs.core.seq(inst_26981);
var inst_26983 = inst_26982;
var inst_26984 = null;
var inst_26985 = (0);
var inst_26986 = (0);
var state_27032__$1 = (function (){var statearr_27055 = state_27032;
(statearr_27055[(9)] = inst_26983);

(statearr_27055[(10)] = inst_26984);

(statearr_27055[(11)] = inst_26985);

(statearr_27055[(12)] = inst_26986);

return statearr_27055;
})();
var statearr_27056_27897 = state_27032__$1;
(statearr_27056_27897[(2)] = null);

(statearr_27056_27897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (17))){
var inst_26997 = (state_27032[(7)]);
var inst_27001 = cljs.core.chunk_first(inst_26997);
var inst_27002 = cljs.core.chunk_rest(inst_26997);
var inst_27003 = cljs.core.count(inst_27001);
var inst_26983 = inst_27002;
var inst_26984 = inst_27001;
var inst_26985 = inst_27003;
var inst_26986 = (0);
var state_27032__$1 = (function (){var statearr_27057 = state_27032;
(statearr_27057[(9)] = inst_26983);

(statearr_27057[(10)] = inst_26984);

(statearr_27057[(11)] = inst_26985);

(statearr_27057[(12)] = inst_26986);

return statearr_27057;
})();
var statearr_27058_27898 = state_27032__$1;
(statearr_27058_27898[(2)] = null);

(statearr_27058_27898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (3))){
var inst_27030 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27032__$1,inst_27030);
} else {
if((state_val_27033 === (12))){
var inst_27017 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27059_27899 = state_27032__$1;
(statearr_27059_27899[(2)] = inst_27017);

(statearr_27059_27899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (2))){
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27032__$1,(4),in$);
} else {
if((state_val_27033 === (23))){
var inst_27026 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27061_27900 = state_27032__$1;
(statearr_27061_27900[(2)] = inst_27026);

(statearr_27061_27900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (19))){
var inst_27012 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27062_27901 = state_27032__$1;
(statearr_27062_27901[(2)] = inst_27012);

(statearr_27062_27901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (11))){
var inst_26983 = (state_27032[(9)]);
var inst_26997 = (state_27032[(7)]);
var inst_26997__$1 = cljs.core.seq(inst_26983);
var state_27032__$1 = (function (){var statearr_27063 = state_27032;
(statearr_27063[(7)] = inst_26997__$1);

return statearr_27063;
})();
if(inst_26997__$1){
var statearr_27064_27902 = state_27032__$1;
(statearr_27064_27902[(1)] = (14));

} else {
var statearr_27065_27903 = state_27032__$1;
(statearr_27065_27903[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (9))){
var inst_27019 = (state_27032[(2)]);
var inst_27021 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27032__$1 = (function (){var statearr_27066 = state_27032;
(statearr_27066[(15)] = inst_27019);

return statearr_27066;
})();
if(cljs.core.truth_(inst_27021)){
var statearr_27067_27905 = state_27032__$1;
(statearr_27067_27905[(1)] = (21));

} else {
var statearr_27068_27906 = state_27032__$1;
(statearr_27068_27906[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (5))){
var inst_26974 = cljs.core.async.close_BANG_(out);
var state_27032__$1 = state_27032;
var statearr_27069_27907 = state_27032__$1;
(statearr_27069_27907[(2)] = inst_26974);

(statearr_27069_27907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (14))){
var inst_26997 = (state_27032[(7)]);
var inst_26999 = cljs.core.chunked_seq_QMARK_(inst_26997);
var state_27032__$1 = state_27032;
if(inst_26999){
var statearr_27070_27908 = state_27032__$1;
(statearr_27070_27908[(1)] = (17));

} else {
var statearr_27071_27909 = state_27032__$1;
(statearr_27071_27909[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (16))){
var inst_27015 = (state_27032[(2)]);
var state_27032__$1 = state_27032;
var statearr_27073_27910 = state_27032__$1;
(statearr_27073_27910[(2)] = inst_27015);

(statearr_27073_27910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27033 === (10))){
var inst_26984 = (state_27032[(10)]);
var inst_26986 = (state_27032[(12)]);
var inst_26991 = cljs.core._nth(inst_26984,inst_26986);
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27032__$1,(13),out,inst_26991);
} else {
if((state_val_27033 === (18))){
var inst_26997 = (state_27032[(7)]);
var inst_27006 = cljs.core.first(inst_26997);
var state_27032__$1 = state_27032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27032__$1,(20),out,inst_27006);
} else {
if((state_val_27033 === (8))){
var inst_26986 = (state_27032[(12)]);
var inst_26985 = (state_27032[(11)]);
var inst_26988 = (inst_26986 < inst_26985);
var inst_26989 = inst_26988;
var state_27032__$1 = state_27032;
if(cljs.core.truth_(inst_26989)){
var statearr_27074_27911 = state_27032__$1;
(statearr_27074_27911[(1)] = (10));

} else {
var statearr_27075_27912 = state_27032__$1;
(statearr_27075_27912[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24509__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24509__auto____0 = (function (){
var statearr_27076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27076[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24509__auto__);

(statearr_27076[(1)] = (1));

return statearr_27076;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24509__auto____1 = (function (state_27032){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_27032);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e27078){var ex__24512__auto__ = e27078;
var statearr_27079_27913 = state_27032;
(statearr_27079_27913[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_27032[(4)]))){
var statearr_27080_27914 = state_27032;
(statearr_27080_27914[(1)] = cljs.core.first((state_27032[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27915 = state_27032;
state_27032 = G__27915;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24509__auto__ = function(state_27032){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24509__auto____1.call(this,state_27032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24509__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24509__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_27083 = f__24601__auto__();
(statearr_27083[(6)] = c__24600__auto__);

return statearr_27083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));

return c__24600__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27085 = arguments.length;
switch (G__27085) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27087 = arguments.length;
switch (G__27087) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27090 = arguments.length;
switch (G__27090) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24600__auto___27919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_27114){
var state_val_27115 = (state_27114[(1)]);
if((state_val_27115 === (7))){
var inst_27109 = (state_27114[(2)]);
var state_27114__$1 = state_27114;
var statearr_27116_27920 = state_27114__$1;
(statearr_27116_27920[(2)] = inst_27109);

(statearr_27116_27920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27115 === (1))){
var inst_27091 = null;
var state_27114__$1 = (function (){var statearr_27117 = state_27114;
(statearr_27117[(7)] = inst_27091);

return statearr_27117;
})();
var statearr_27118_27921 = state_27114__$1;
(statearr_27118_27921[(2)] = null);

(statearr_27118_27921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27115 === (4))){
var inst_27094 = (state_27114[(8)]);
var inst_27094__$1 = (state_27114[(2)]);
var inst_27095 = (inst_27094__$1 == null);
var inst_27096 = cljs.core.not(inst_27095);
var state_27114__$1 = (function (){var statearr_27119 = state_27114;
(statearr_27119[(8)] = inst_27094__$1);

return statearr_27119;
})();
if(inst_27096){
var statearr_27120_27922 = state_27114__$1;
(statearr_27120_27922[(1)] = (5));

} else {
var statearr_27121_27923 = state_27114__$1;
(statearr_27121_27923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27115 === (6))){
var state_27114__$1 = state_27114;
var statearr_27122_27924 = state_27114__$1;
(statearr_27122_27924[(2)] = null);

(statearr_27122_27924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27115 === (3))){
var inst_27111 = (state_27114[(2)]);
var inst_27112 = cljs.core.async.close_BANG_(out);
var state_27114__$1 = (function (){var statearr_27124 = state_27114;
(statearr_27124[(9)] = inst_27111);

return statearr_27124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27114__$1,inst_27112);
} else {
if((state_val_27115 === (2))){
var state_27114__$1 = state_27114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27114__$1,(4),ch);
} else {
if((state_val_27115 === (11))){
var inst_27094 = (state_27114[(8)]);
var inst_27103 = (state_27114[(2)]);
var inst_27091 = inst_27094;
var state_27114__$1 = (function (){var statearr_27125 = state_27114;
(statearr_27125[(10)] = inst_27103);

(statearr_27125[(7)] = inst_27091);

return statearr_27125;
})();
var statearr_27126_27925 = state_27114__$1;
(statearr_27126_27925[(2)] = null);

(statearr_27126_27925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27115 === (9))){
var inst_27094 = (state_27114[(8)]);
var state_27114__$1 = state_27114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27114__$1,(11),out,inst_27094);
} else {
if((state_val_27115 === (5))){
var inst_27094 = (state_27114[(8)]);
var inst_27091 = (state_27114[(7)]);
var inst_27098 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27094,inst_27091);
var state_27114__$1 = state_27114;
if(inst_27098){
var statearr_27128_27926 = state_27114__$1;
(statearr_27128_27926[(1)] = (8));

} else {
var statearr_27129_27927 = state_27114__$1;
(statearr_27129_27927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27115 === (10))){
var inst_27106 = (state_27114[(2)]);
var state_27114__$1 = state_27114;
var statearr_27130_27928 = state_27114__$1;
(statearr_27130_27928[(2)] = inst_27106);

(statearr_27130_27928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27115 === (8))){
var inst_27091 = (state_27114[(7)]);
var tmp27127 = inst_27091;
var inst_27091__$1 = tmp27127;
var state_27114__$1 = (function (){var statearr_27131 = state_27114;
(statearr_27131[(7)] = inst_27091__$1);

return statearr_27131;
})();
var statearr_27133_27929 = state_27114__$1;
(statearr_27133_27929[(2)] = null);

(statearr_27133_27929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_27134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27134[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_27134[(1)] = (1));

return statearr_27134;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_27114){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_27114);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e27135){var ex__24512__auto__ = e27135;
var statearr_27136_27930 = state_27114;
(statearr_27136_27930[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_27114[(4)]))){
var statearr_27137_27931 = state_27114;
(statearr_27137_27931[(1)] = cljs.core.first((state_27114[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27932 = state_27114;
state_27114 = G__27932;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_27114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_27114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_27139 = f__24601__auto__();
(statearr_27139[(6)] = c__24600__auto___27919);

return statearr_27139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27141 = arguments.length;
switch (G__27141) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24600__auto___27938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_27182){
var state_val_27183 = (state_27182[(1)]);
if((state_val_27183 === (7))){
var inst_27178 = (state_27182[(2)]);
var state_27182__$1 = state_27182;
var statearr_27184_27939 = state_27182__$1;
(statearr_27184_27939[(2)] = inst_27178);

(statearr_27184_27939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (1))){
var inst_27143 = (new Array(n));
var inst_27144 = inst_27143;
var inst_27145 = (0);
var state_27182__$1 = (function (){var statearr_27185 = state_27182;
(statearr_27185[(7)] = inst_27144);

(statearr_27185[(8)] = inst_27145);

return statearr_27185;
})();
var statearr_27186_27941 = state_27182__$1;
(statearr_27186_27941[(2)] = null);

(statearr_27186_27941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (4))){
var inst_27149 = (state_27182[(9)]);
var inst_27149__$1 = (state_27182[(2)]);
var inst_27150 = (inst_27149__$1 == null);
var inst_27151 = cljs.core.not(inst_27150);
var state_27182__$1 = (function (){var statearr_27189 = state_27182;
(statearr_27189[(9)] = inst_27149__$1);

return statearr_27189;
})();
if(inst_27151){
var statearr_27190_27942 = state_27182__$1;
(statearr_27190_27942[(1)] = (5));

} else {
var statearr_27191_27943 = state_27182__$1;
(statearr_27191_27943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (15))){
var inst_27172 = (state_27182[(2)]);
var state_27182__$1 = state_27182;
var statearr_27192_27944 = state_27182__$1;
(statearr_27192_27944[(2)] = inst_27172);

(statearr_27192_27944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (13))){
var state_27182__$1 = state_27182;
var statearr_27193_27945 = state_27182__$1;
(statearr_27193_27945[(2)] = null);

(statearr_27193_27945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (6))){
var inst_27145 = (state_27182[(8)]);
var inst_27168 = (inst_27145 > (0));
var state_27182__$1 = state_27182;
if(cljs.core.truth_(inst_27168)){
var statearr_27196_27946 = state_27182__$1;
(statearr_27196_27946[(1)] = (12));

} else {
var statearr_27197_27947 = state_27182__$1;
(statearr_27197_27947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (3))){
var inst_27180 = (state_27182[(2)]);
var state_27182__$1 = state_27182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27182__$1,inst_27180);
} else {
if((state_val_27183 === (12))){
var inst_27144 = (state_27182[(7)]);
var inst_27170 = cljs.core.vec(inst_27144);
var state_27182__$1 = state_27182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27182__$1,(15),out,inst_27170);
} else {
if((state_val_27183 === (2))){
var state_27182__$1 = state_27182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27182__$1,(4),ch);
} else {
if((state_val_27183 === (11))){
var inst_27162 = (state_27182[(2)]);
var inst_27163 = (new Array(n));
var inst_27144 = inst_27163;
var inst_27145 = (0);
var state_27182__$1 = (function (){var statearr_27199 = state_27182;
(statearr_27199[(10)] = inst_27162);

(statearr_27199[(7)] = inst_27144);

(statearr_27199[(8)] = inst_27145);

return statearr_27199;
})();
var statearr_27200_27948 = state_27182__$1;
(statearr_27200_27948[(2)] = null);

(statearr_27200_27948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (9))){
var inst_27144 = (state_27182[(7)]);
var inst_27160 = cljs.core.vec(inst_27144);
var state_27182__$1 = state_27182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27182__$1,(11),out,inst_27160);
} else {
if((state_val_27183 === (5))){
var inst_27144 = (state_27182[(7)]);
var inst_27145 = (state_27182[(8)]);
var inst_27149 = (state_27182[(9)]);
var inst_27155 = (state_27182[(11)]);
var inst_27154 = (inst_27144[inst_27145] = inst_27149);
var inst_27155__$1 = (inst_27145 + (1));
var inst_27156 = (inst_27155__$1 < n);
var state_27182__$1 = (function (){var statearr_27201 = state_27182;
(statearr_27201[(12)] = inst_27154);

(statearr_27201[(11)] = inst_27155__$1);

return statearr_27201;
})();
if(cljs.core.truth_(inst_27156)){
var statearr_27202_27949 = state_27182__$1;
(statearr_27202_27949[(1)] = (8));

} else {
var statearr_27203_27950 = state_27182__$1;
(statearr_27203_27950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (14))){
var inst_27175 = (state_27182[(2)]);
var inst_27176 = cljs.core.async.close_BANG_(out);
var state_27182__$1 = (function (){var statearr_27205 = state_27182;
(statearr_27205[(13)] = inst_27175);

return statearr_27205;
})();
var statearr_27207_27951 = state_27182__$1;
(statearr_27207_27951[(2)] = inst_27176);

(statearr_27207_27951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (10))){
var inst_27166 = (state_27182[(2)]);
var state_27182__$1 = state_27182;
var statearr_27209_27952 = state_27182__$1;
(statearr_27209_27952[(2)] = inst_27166);

(statearr_27209_27952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27183 === (8))){
var inst_27144 = (state_27182[(7)]);
var inst_27155 = (state_27182[(11)]);
var tmp27204 = inst_27144;
var inst_27144__$1 = tmp27204;
var inst_27145 = inst_27155;
var state_27182__$1 = (function (){var statearr_27210 = state_27182;
(statearr_27210[(7)] = inst_27144__$1);

(statearr_27210[(8)] = inst_27145);

return statearr_27210;
})();
var statearr_27211_27953 = state_27182__$1;
(statearr_27211_27953[(2)] = null);

(statearr_27211_27953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_27212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27212[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_27212[(1)] = (1));

return statearr_27212;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_27182){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_27182);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e27213){var ex__24512__auto__ = e27213;
var statearr_27214_27954 = state_27182;
(statearr_27214_27954[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_27182[(4)]))){
var statearr_27215_27955 = state_27182;
(statearr_27215_27955[(1)] = cljs.core.first((state_27182[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27956 = state_27182;
state_27182 = G__27956;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_27182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_27182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_27218 = f__24601__auto__();
(statearr_27218[(6)] = c__24600__auto___27938);

return statearr_27218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27222 = arguments.length;
switch (G__27222) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__24600__auto___27960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24601__auto__ = (function (){var switch__24508__auto__ = (function (state_27284){
var state_val_27285 = (state_27284[(1)]);
if((state_val_27285 === (7))){
var inst_27280 = (state_27284[(2)]);
var state_27284__$1 = state_27284;
var statearr_27286_27961 = state_27284__$1;
(statearr_27286_27961[(2)] = inst_27280);

(statearr_27286_27961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (1))){
var inst_27229 = [];
var inst_27230 = inst_27229;
var inst_27231 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27284__$1 = (function (){var statearr_27292 = state_27284;
(statearr_27292[(7)] = inst_27230);

(statearr_27292[(8)] = inst_27231);

return statearr_27292;
})();
var statearr_27294_27962 = state_27284__$1;
(statearr_27294_27962[(2)] = null);

(statearr_27294_27962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (4))){
var inst_27234 = (state_27284[(9)]);
var inst_27234__$1 = (state_27284[(2)]);
var inst_27235 = (inst_27234__$1 == null);
var inst_27236 = cljs.core.not(inst_27235);
var state_27284__$1 = (function (){var statearr_27298 = state_27284;
(statearr_27298[(9)] = inst_27234__$1);

return statearr_27298;
})();
if(inst_27236){
var statearr_27299_27963 = state_27284__$1;
(statearr_27299_27963[(1)] = (5));

} else {
var statearr_27300_27964 = state_27284__$1;
(statearr_27300_27964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (15))){
var inst_27230 = (state_27284[(7)]);
var inst_27272 = cljs.core.vec(inst_27230);
var state_27284__$1 = state_27284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27284__$1,(18),out,inst_27272);
} else {
if((state_val_27285 === (13))){
var inst_27256 = (state_27284[(2)]);
var state_27284__$1 = state_27284;
var statearr_27301_27965 = state_27284__$1;
(statearr_27301_27965[(2)] = inst_27256);

(statearr_27301_27965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (6))){
var inst_27230 = (state_27284[(7)]);
var inst_27269 = inst_27230.length;
var inst_27270 = (inst_27269 > (0));
var state_27284__$1 = state_27284;
if(cljs.core.truth_(inst_27270)){
var statearr_27302_27966 = state_27284__$1;
(statearr_27302_27966[(1)] = (15));

} else {
var statearr_27303_27967 = state_27284__$1;
(statearr_27303_27967[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (17))){
var inst_27277 = (state_27284[(2)]);
var inst_27278 = cljs.core.async.close_BANG_(out);
var state_27284__$1 = (function (){var statearr_27304 = state_27284;
(statearr_27304[(10)] = inst_27277);

return statearr_27304;
})();
var statearr_27305_27968 = state_27284__$1;
(statearr_27305_27968[(2)] = inst_27278);

(statearr_27305_27968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (3))){
var inst_27282 = (state_27284[(2)]);
var state_27284__$1 = state_27284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27284__$1,inst_27282);
} else {
if((state_val_27285 === (12))){
var inst_27230 = (state_27284[(7)]);
var inst_27249 = cljs.core.vec(inst_27230);
var state_27284__$1 = state_27284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27284__$1,(14),out,inst_27249);
} else {
if((state_val_27285 === (2))){
var state_27284__$1 = state_27284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27284__$1,(4),ch);
} else {
if((state_val_27285 === (11))){
var inst_27230 = (state_27284[(7)]);
var inst_27234 = (state_27284[(9)]);
var inst_27238 = (state_27284[(11)]);
var inst_27246 = inst_27230.push(inst_27234);
var tmp27306 = inst_27230;
var inst_27230__$1 = tmp27306;
var inst_27231 = inst_27238;
var state_27284__$1 = (function (){var statearr_27312 = state_27284;
(statearr_27312[(12)] = inst_27246);

(statearr_27312[(7)] = inst_27230__$1);

(statearr_27312[(8)] = inst_27231);

return statearr_27312;
})();
var statearr_27313_27969 = state_27284__$1;
(statearr_27313_27969[(2)] = null);

(statearr_27313_27969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (9))){
var inst_27231 = (state_27284[(8)]);
var inst_27242 = cljs.core.keyword_identical_QMARK_(inst_27231,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_27284__$1 = state_27284;
var statearr_27318_27971 = state_27284__$1;
(statearr_27318_27971[(2)] = inst_27242);

(statearr_27318_27971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (5))){
var inst_27234 = (state_27284[(9)]);
var inst_27238 = (state_27284[(11)]);
var inst_27231 = (state_27284[(8)]);
var inst_27239 = (state_27284[(13)]);
var inst_27238__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27234) : f.call(null,inst_27234));
var inst_27239__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27238__$1,inst_27231);
var state_27284__$1 = (function (){var statearr_27320 = state_27284;
(statearr_27320[(11)] = inst_27238__$1);

(statearr_27320[(13)] = inst_27239__$1);

return statearr_27320;
})();
if(inst_27239__$1){
var statearr_27321_27972 = state_27284__$1;
(statearr_27321_27972[(1)] = (8));

} else {
var statearr_27322_27973 = state_27284__$1;
(statearr_27322_27973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (14))){
var inst_27234 = (state_27284[(9)]);
var inst_27238 = (state_27284[(11)]);
var inst_27251 = (state_27284[(2)]);
var inst_27252 = [];
var inst_27253 = inst_27252.push(inst_27234);
var inst_27230 = inst_27252;
var inst_27231 = inst_27238;
var state_27284__$1 = (function (){var statearr_27323 = state_27284;
(statearr_27323[(14)] = inst_27251);

(statearr_27323[(15)] = inst_27253);

(statearr_27323[(7)] = inst_27230);

(statearr_27323[(8)] = inst_27231);

return statearr_27323;
})();
var statearr_27324_27974 = state_27284__$1;
(statearr_27324_27974[(2)] = null);

(statearr_27324_27974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (16))){
var state_27284__$1 = state_27284;
var statearr_27325_27975 = state_27284__$1;
(statearr_27325_27975[(2)] = null);

(statearr_27325_27975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (10))){
var inst_27244 = (state_27284[(2)]);
var state_27284__$1 = state_27284;
if(cljs.core.truth_(inst_27244)){
var statearr_27326_27976 = state_27284__$1;
(statearr_27326_27976[(1)] = (11));

} else {
var statearr_27328_27977 = state_27284__$1;
(statearr_27328_27977[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (18))){
var inst_27274 = (state_27284[(2)]);
var state_27284__$1 = state_27284;
var statearr_27329_27978 = state_27284__$1;
(statearr_27329_27978[(2)] = inst_27274);

(statearr_27329_27978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27285 === (8))){
var inst_27239 = (state_27284[(13)]);
var state_27284__$1 = state_27284;
var statearr_27331_27979 = state_27284__$1;
(statearr_27331_27979[(2)] = inst_27239);

(statearr_27331_27979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24509__auto__ = null;
var cljs$core$async$state_machine__24509__auto____0 = (function (){
var statearr_27333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27333[(0)] = cljs$core$async$state_machine__24509__auto__);

(statearr_27333[(1)] = (1));

return statearr_27333;
});
var cljs$core$async$state_machine__24509__auto____1 = (function (state_27284){
while(true){
var ret_value__24510__auto__ = (function (){try{while(true){
var result__24511__auto__ = switch__24508__auto__(state_27284);
if(cljs.core.keyword_identical_QMARK_(result__24511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24511__auto__;
}
break;
}
}catch (e27334){var ex__24512__auto__ = e27334;
var statearr_27335_27980 = state_27284;
(statearr_27335_27980[(2)] = ex__24512__auto__);


if(cljs.core.seq((state_27284[(4)]))){
var statearr_27336_27981 = state_27284;
(statearr_27336_27981[(1)] = cljs.core.first((state_27284[(4)])));

} else {
throw ex__24512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27982 = state_27284;
state_27284 = G__27982;
continue;
} else {
return ret_value__24510__auto__;
}
break;
}
});
cljs$core$async$state_machine__24509__auto__ = function(state_27284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24509__auto____1.call(this,state_27284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24509__auto____0;
cljs$core$async$state_machine__24509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24509__auto____1;
return cljs$core$async$state_machine__24509__auto__;
})()
})();
var state__24602__auto__ = (function (){var statearr_27338 = f__24601__auto__();
(statearr_27338[(6)] = c__24600__auto___27960);

return statearr_27338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24602__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

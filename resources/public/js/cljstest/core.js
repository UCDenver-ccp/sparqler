// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljstest.core');
goog.require('cljs.core');
cljstest.core.require_macros.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljtest.terms,new cljs.core.Keyword(null,"as","as",1148689641),cljstest.core.t], null));
/**
 * Absolute value of a number
 * ~~~klipse
 * (map abs (range -5 5))
 * ~~~
 */
cljstest.core.abs = (function cljstest$core$abs(x){
var x__4611__auto__ = x;
var y__4612__auto__ = (- x);
return ((x__4611__auto__ > y__4612__auto__) ? x__4611__auto__ : y__4612__auto__);
});
/**
 * Test Query
 * ~~~klipse
 * rdfs:label
 * ~~~
 * 
 */
cljstest.core.test_query = (function cljstest$core$test_query(){
return cljs.core.print.call(null,t.rdfs_COLON_label);
});

//# sourceMappingURL=core.js.map
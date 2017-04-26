// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljstest.core');
goog.require('cljs.core');
new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljtest.terms,new cljs.core.Keyword(null,"as","as",1148689641),cljstest.core.t], null));
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
cljstest.core.testquery = (function cljstest$core$testquery(){
return cljs.core.print.call(null,cljtest.terms.rdfs_COLON_label);
});

//# sourceMappingURL=core.js.map
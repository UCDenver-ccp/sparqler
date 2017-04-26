// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljstest.core');
goog.require('cljs.core');
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
return cljs.core.print.call(null,"hi");
});

//# sourceMappingURL=core.js.map
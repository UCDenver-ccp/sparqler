// Compiled by ClojureScript 0.0-3211 {}
goog.provide('matsu_core');
goog.require('cljs.core');
matsu_core.empty_query = (function matsu_core$empty_query(){




return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"having","having",-399543166),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.Keyword(null,"local-prefixes","local-prefixes",-1807170140),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"group-by","group-by",-379139802),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"from-named","from-named",-356331277),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"query-form","query-form",-1377995078),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"select","select",1147833503)],[null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null,null,null,null,null,null,null,null,null,null,null]);
});
matsu_core.prefixes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xsd","xsd",-59458839),"<http://www.w3.org/2001/XMLSchema#>"], null));
matsu_core.register_namespaces = (function matsu_core$register_namespaces(m){
return cljs.core.swap_BANG_.call(null,matsu_core.prefixes,cljs.core.merge,m);
});
/**
 * Resolves prefixes. Throws an error if the namespace cannot be resolved.
 */
matsu_core.ns_or_error = (function matsu_core$ns_or_error(k,m){
var temp__4655__auto__ = k.call(null,m);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return v;
} else {
var temp__4655__auto____$1 = k.call(null,cljs.core.deref.call(null,matsu_core.prefixes));
if(cljs.core.truth_(temp__4655__auto____$1)){
var v = temp__4655__auto____$1;
return v;
} else {
throw (new matsu_core.IllegalArgumentException([cljs.core.str("Cannot resolve namespace: "),cljs.core.str(k)].join('')));
}
}
});

//# sourceMappingURL=matsu_core.js.map
// Compiled by ClojureScript 0.0-3211 {}
goog.provide('matsu_sparql');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('matsu_compiler');
goog.require('matsu_core');
matsu_sparql.a = "a";
matsu_sparql._AMPERSAND__AMPERSAND_ = new cljs.core.Symbol(null,"&&","&&",-1330982734,null);
matsu_sparql._BAR__BAR_ = new cljs.core.Symbol(null,"||","||",1432830790,null);
matsu_sparql._BANG__EQ_ = new cljs.core.Symbol(null,"!=","!=",-201205829,null);
matsu_sparql.defmacro.call(null,matsu_sparql.defquery,"Defines a query-map and binds it to a function taking [args]",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name,matsu_sparql.args,matsu_sparql._AMPERSAND_,matsu_sparql.body], null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.name),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,matsu_sparql.args))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("matsu_sparql","query","matsu_sparql/query",-264610529,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","->","clojure.core/->",1452757553,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,matsu_core.empty_query))))),matsu_sparql.body))))))))))));
matsu_sparql.defmacro.call(null,matsu_sparql.query,"Let you craft a SPARQL-query by composing functions\n\n    ex:  (query\n           (select :s)\n           (where :s :p :p))\n\n  Which will return a valid SPARQL 1.1 string:\n    'SELECT ?s WHERE { ?s ?p ?o }'\n\n  The macro can also be called with a query-map as its first argument,\n  allowing you to work on saved queries.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [matsu_sparql.q,matsu_sparql._AMPERSAND_,matsu_sparql.body], null),((cljs.core.list_QMARK_.call(null,matsu_sparql.q))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","->","clojure.core/->",1452757553,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("matsu_core","empty-query","matsu_core/empty-query",1243311705,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,matsu_sparql.q),matsu_sparql.body,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("matsu_compiler","compile-query","matsu_compiler/compile-query",-704141546,null))))))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","->","clojure.core/->",1452757553,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,matsu_sparql.q),matsu_sparql.body,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("matsu_compiler","compile-query","matsu_compiler/compile-query",-704141546,null)))))))))));
matsu_sparql.defmacro.call(null,matsu_sparql.query_with_prefixes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [matsu_sparql.m,matsu_sparql._AMPERSAND_,matsu_sparql.body], null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("matsu_sparql","query","matsu_sparql/query",-264610529,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core","assoc","clojure.core/assoc",357848903,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("matsu_core","empty-query","matsu_core/empty-query",1243311705,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"local-prefixes","local-prefixes",-1807170140)),cljs.core._conj.call(null,cljs.core.List.EMPTY,matsu_sparql.m))))),matsu_sparql.body))));
matsu_sparql.flat = (function matsu_sparql$flat(coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.seq.call(null,coll);
if(temp__4657__auto__){
var s = temp__4657__auto__;
if(cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,s))){
return cljs.core.concat.call(null,matsu_sparql$flat.call(null,cljs.core.first.call(null,s)),matsu_sparql$flat.call(null,cljs.core.rest.call(null,s)));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,s),matsu_sparql$flat.call(null,cljs.core.rest.call(null,s)));
}
} else {
return null;
}
}),null,null));
});
matsu_sparql.raw = (function matsu_sparql$raw(string){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"",new cljs.core.Keyword(null,"sep","sep",1970430530),"",new cljs.core.Keyword(null,"bounds","bounds",1691609455),"",new cljs.core.Keyword(null,"content","content",15833224),string], null);
});
/**
 * Delimits a graph pattern within curly braces. (Not a SPARQL keyword.)
 */
matsu_sparql.group = (function matsu_sparql$group(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.group.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{ "," }"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});

matsu_sparql.group.cljs$lang$maxFixedArity = (0);

matsu_sparql.group.cljs$lang$applyTo = (function (seq5695){
return matsu_sparql.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5695));
});
matsu_sparql.base = (function matsu_sparql$base(q,uri){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"base","base",185279322),uri);
});
matsu_sparql.select = (function matsu_sparql$select(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.select.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"query-form","query-form",-1377995078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"SELECT",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more)], null));
});

matsu_sparql.select.cljs$lang$maxFixedArity = (1);

matsu_sparql.select.cljs$lang$applyTo = (function (seq5696){
var G__5697 = cljs.core.first.call(null,seq5696);
var seq5696__$1 = cljs.core.next.call(null,seq5696);
return matsu_sparql.select.cljs$core$IFn$_invoke$arity$variadic(G__5697,seq5696__$1);
});
matsu_sparql.construct = (function matsu_sparql$construct(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.construct.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.construct.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"query-form","query-form",-1377995078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"CONSTRUCT",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" { "," } "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null));
});

matsu_sparql.construct.cljs$lang$maxFixedArity = (1);

matsu_sparql.construct.cljs$lang$applyTo = (function (seq5698){
var G__5699 = cljs.core.first.call(null,seq5698);
var seq5698__$1 = cljs.core.next.call(null,seq5698);
return matsu_sparql.construct.cljs$core$IFn$_invoke$arity$variadic(G__5699,seq5698__$1);
});
matsu_sparql.ask = (function matsu_sparql$ask(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.ask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.ask.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"query-form","query-form",-1377995078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"ASK",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" { "," } "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null));
});

matsu_sparql.ask.cljs$lang$maxFixedArity = (1);

matsu_sparql.ask.cljs$lang$applyTo = (function (seq5700){
var G__5701 = cljs.core.first.call(null,seq5700);
var seq5700__$1 = cljs.core.next.call(null,seq5700);
return matsu_sparql.ask.cljs$core$IFn$_invoke$arity$variadic(G__5701,seq5700__$1);
});
matsu_sparql.describe = (function matsu_sparql$describe(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.describe.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"query-form","query-form",-1377995078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"DESCRIBE",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null));
});

matsu_sparql.describe.cljs$lang$maxFixedArity = (1);

matsu_sparql.describe.cljs$lang$applyTo = (function (seq5702){
var G__5703 = cljs.core.first.call(null,seq5702);
var seq5702__$1 = cljs.core.next.call(null,seq5702);
return matsu_sparql.describe.cljs$core$IFn$_invoke$arity$variadic(G__5703,seq5702__$1);
});
matsu_sparql.where = (function matsu_sparql$where(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.where.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.where.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"WHERE",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,matsu_sparql.flat.call(null,more)),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" { "," } "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null));
});

matsu_sparql.where.cljs$lang$maxFixedArity = (1);

matsu_sparql.where.cljs$lang$applyTo = (function (seq5704){
var G__5705 = cljs.core.first.call(null,seq5704);
var seq5704__$1 = cljs.core.next.call(null,seq5704);
return matsu_sparql.where.cljs$core$IFn$_invoke$arity$variadic(G__5705,seq5704__$1);
});
/**
 * Where clause without the optional WHERE keyword
 */
matsu_sparql.where_ = (function matsu_sparql$where_(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.where_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.where_.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,matsu_sparql.flat.call(null,more)),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{ "," } "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null));
});

matsu_sparql.where_.cljs$lang$maxFixedArity = (1);

matsu_sparql.where_.cljs$lang$applyTo = (function (seq5706){
var G__5707 = cljs.core.first.call(null,seq5706);
var seq5706__$1 = cljs.core.next.call(null,seq5706);
return matsu_sparql.where_.cljs$core$IFn$_invoke$arity$variadic(G__5707,seq5706__$1);
});
matsu_sparql.optional = (function matsu_sparql$optional(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.optional.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.optional.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"OPTIONAL ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{ "," }"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});

matsu_sparql.optional.cljs$lang$maxFixedArity = (0);

matsu_sparql.optional.cljs$lang$applyTo = (function (seq5708){
return matsu_sparql.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5708));
});
matsu_sparql.union = (function matsu_sparql$union(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.union.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.union.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.interpose.call(null,new cljs.core.Symbol(null,"UNION","UNION",-2118294109,null),cljs.core.vec.call(null,more)),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});

matsu_sparql.union.cljs$lang$maxFixedArity = (0);

matsu_sparql.union.cljs$lang$applyTo = (function (seq5709){
return matsu_sparql.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5709));
});
matsu_sparql.graph = (function matsu_sparql$graph(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),[cljs.core.str("GRAPH "),cljs.core.str(matsu_compiler.encode.call(null,g))].join(''),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" { "," }"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});

matsu_sparql.graph.cljs$lang$maxFixedArity = (1);

matsu_sparql.graph.cljs$lang$applyTo = (function (seq5710){
var G__5711 = cljs.core.first.call(null,seq5710);
var seq5710__$1 = cljs.core.next.call(null,seq5710);
return matsu_sparql.graph.cljs$core$IFn$_invoke$arity$variadic(G__5711,seq5710__$1);
});
/**
 * Don't use parentheses if FILTER is to be followed by one of these functions.
 */
matsu_sparql.no_bounds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["isIRI",null,"isBlank",null,"regex",null,"isLiteral",null,"langMatches",null], null), null);
matsu_sparql.filter = (function matsu_sparql$filter(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.filter.cljs$core$IFn$_invoke$arity$variadic = (function (more){
if((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,more))) && (cljs.core.contains_QMARK_.call(null,matsu_sparql.no_bounds,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,more))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"FILTER",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",""], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"FILTER",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
}
});

matsu_sparql.filter.cljs$lang$maxFixedArity = (0);

matsu_sparql.filter.cljs$lang$applyTo = (function (seq5712){
return matsu_sparql.filter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5712));
});
matsu_sparql.filter_not_exists = (function matsu_sparql$filter_not_exists(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.filter_not_exists.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.filter_not_exists.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"FILTER NOT EXISTS ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{ "," }"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});

matsu_sparql.filter_not_exists.cljs$lang$maxFixedArity = (0);

matsu_sparql.filter_not_exists.cljs$lang$applyTo = (function (seq5713){
return matsu_sparql.filter_not_exists.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5713));
});
matsu_sparql.filter_exists = (function matsu_sparql$filter_exists(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.filter_exists.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.filter_exists.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"FILTER EXISTS ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{ "," }"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});

matsu_sparql.filter_exists.cljs$lang$maxFixedArity = (0);

matsu_sparql.filter_exists.cljs$lang$applyTo = (function (seq5714){
return matsu_sparql.filter_exists.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5714));
});
matsu_sparql.minus = (function matsu_sparql$minus(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.minus.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.minus.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"MINUS ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{ "," }"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});

matsu_sparql.minus.cljs$lang$maxFixedArity = (0);

matsu_sparql.minus.cljs$lang$applyTo = (function (seq5715){
return matsu_sparql.minus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5715));
});
matsu_sparql.from = (function matsu_sparql$from(q,graph){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"FROM",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [graph], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null));
});
matsu_sparql.from_named = (function matsu_sparql$from_named(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.from_named.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.from_named.cljs$core$IFn$_invoke$arity$variadic = (function (q,graphs){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"from-named","from-named",-356331277),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [""," "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.interleave.call(null,cljs.core.repeat.call(null,matsu_sparql.raw.call(null,"FROM NAMED")),cljs.core.vec.call(null,graphs))], null));
});

matsu_sparql.from_named.cljs$lang$maxFixedArity = (1);

matsu_sparql.from_named.cljs$lang$applyTo = (function (seq5716){
var G__5717 = cljs.core.first.call(null,seq5716);
var seq5716__$1 = cljs.core.next.call(null,seq5716);
return matsu_sparql.from_named.cljs$core$IFn$_invoke$arity$variadic(G__5717,seq5716__$1);
});
matsu_sparql.select_distinct = (function matsu_sparql$select_distinct(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.select_distinct.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.select_distinct.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"query-form","query-form",-1377995078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"SELECT DISTINCT",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null));
});

matsu_sparql.select_distinct.cljs$lang$maxFixedArity = (1);

matsu_sparql.select_distinct.cljs$lang$applyTo = (function (seq5718){
var G__5719 = cljs.core.first.call(null,seq5718);
var seq5718__$1 = cljs.core.next.call(null,seq5718);
return matsu_sparql.select_distinct.cljs$core$IFn$_invoke$arity$variadic(G__5719,seq5718__$1);
});
matsu_sparql.select_reduced = (function matsu_sparql$select_reduced(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.select_reduced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.select_reduced.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"query-form","query-form",-1377995078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"SELECT REDUCED",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null));
});

matsu_sparql.select_reduced.cljs$lang$maxFixedArity = (1);

matsu_sparql.select_reduced.cljs$lang$applyTo = (function (seq5720){
var G__5721 = cljs.core.first.call(null,seq5720);
var seq5720__$1 = cljs.core.next.call(null,seq5720);
return matsu_sparql.select_reduced.cljs$core$IFn$_invoke$arity$variadic(G__5721,seq5720__$1);
});
matsu_sparql.limit = (function matsu_sparql$limit(q,n){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"LIMIT",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null)], null));
});
matsu_sparql.offset = (function matsu_sparql$offset(q,n){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"OFFSET",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null)], null));
});
matsu_sparql.desc = (function matsu_sparql$desc(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"DESC",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.asc = (function matsu_sparql$asc(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"ASC",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.order_by = (function matsu_sparql$order_by(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.order_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.order_by.cljs$core$IFn$_invoke$arity$variadic = (function (q,expr){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"ORDER BY",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,expr)], null));
});

matsu_sparql.order_by.cljs$lang$maxFixedArity = (1);

matsu_sparql.order_by.cljs$lang$applyTo = (function (seq5722){
var G__5723 = cljs.core.first.call(null,seq5722);
var seq5722__$1 = cljs.core.next.call(null,seq5722);
return matsu_sparql.order_by.cljs$core$IFn$_invoke$arity$variadic(G__5723,seq5722__$1);
});
matsu_sparql.order_by_desc = (function matsu_sparql$order_by_desc(q,v){
return matsu_sparql.order_by.call(null,q,matsu_sparql.desc.call(null,v));
});
matsu_sparql.order_by_asc = (function matsu_sparql$order_by_asc(q,v){
return matsu_sparql.order_by.call(null,q,matsu_sparql.asc.call(null,v));
});
matsu_sparql.group_by = (function matsu_sparql$group_by(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.group_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.group_by.cljs$core$IFn$_invoke$arity$variadic = (function (q,expr){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"group-by","group-by",-379139802),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"GROUP BY",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,expr)], null));
});

matsu_sparql.group_by.cljs$lang$maxFixedArity = (1);

matsu_sparql.group_by.cljs$lang$applyTo = (function (seq5724){
var G__5725 = cljs.core.first.call(null,seq5724);
var seq5724__$1 = cljs.core.next.call(null,seq5724);
return matsu_sparql.group_by.cljs$core$IFn$_invoke$arity$variadic(G__5725,seq5724__$1);
});
matsu_sparql.having = (function matsu_sparql$having(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.having.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.having.cljs$core$IFn$_invoke$arity$variadic = (function (q,expr){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"having","having",-399543166),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"HAVING",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,expr)], null));
});

matsu_sparql.having.cljs$lang$maxFixedArity = (1);

matsu_sparql.having.cljs$lang$applyTo = (function (seq5726){
var G__5727 = cljs.core.first.call(null,seq5726);
var seq5726__$1 = cljs.core.next.call(null,seq5726);
return matsu_sparql.having.cljs$core$IFn$_invoke$arity$variadic(G__5727,seq5726__$1);
});
matsu_sparql.sum = (function matsu_sparql$sum(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"SUM",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.avg = (function matsu_sparql$avg(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"AVG",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.min = (function matsu_sparql$min(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"MIN",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.max = (function matsu_sparql$max(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"MAX",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.sum = (function matsu_sparql$sum(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"SUM",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.count = (function matsu_sparql$count(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"COUNT",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.count_distinct = (function matsu_sparql$count_distinct(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"COUNT",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(DISTINCT ",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.group_concat = (function matsu_sparql$group_concat(v,sep){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"sql:GROUP_CONCAT",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),", ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,sep], null)], null);
});
matsu_sparql.sample = (function matsu_sparql$sample(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"sql:SAMPLE",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),"",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)], null);
});
matsu_sparql.bind = (function matsu_sparql$bind(v){
var vec__5729 = v;
var expr = cljs.core.nth.call(null,vec__5729,(0),null);
var name = cljs.core.nth.call(null,vec__5729,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"BIND",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,new cljs.core.Symbol(null,"AS","AS",-993573699,null),name], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});
matsu_sparql.values = (function matsu_sparql$values(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.values.cljs$core$IFn$_invoke$arity$variadic = (function (v,more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"VALUES",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,matsu_sparql.flat.call(null,more)),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(" "),cljs.core.str(matsu_compiler.encode.call(null,v)),cljs.core.str(" { ")].join('')," } "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});

matsu_sparql.values.cljs$lang$maxFixedArity = (1);

matsu_sparql.values.cljs$lang$applyTo = (function (seq5730){
var G__5731 = cljs.core.first.call(null,seq5730);
var seq5730__$1 = cljs.core.next.call(null,seq5730);
return matsu_sparql.values.cljs$core$IFn$_invoke$arity$variadic(G__5731,seq5730__$1);
});
matsu_sparql.bound = (function matsu_sparql$bound(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"bound",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});
matsu_sparql._BANG_bound = (function matsu_sparql$_BANG_bound(v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"!bound",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});
matsu_sparql.concat = (function matsu_sparql$concat(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.concat.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.concat.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"CONCAT",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),", "], null);
});

matsu_sparql.concat.cljs$lang$maxFixedArity = (0);

matsu_sparql.concat.cljs$lang$applyTo = (function (seq5732){
return matsu_sparql.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5732));
});
matsu_sparql.regex = (function matsu_sparql$regex(){
var argseq__5339__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return matsu_sparql.regex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5339__auto__);
});

matsu_sparql.regex.cljs$core$IFn$_invoke$arity$variadic = (function (v,regex,flags){
if(cljs.core.truth_(flags)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"regex",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),", ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,regex,cljs.core.first.call(null,flags)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"regex",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),", ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,regex], null)], null);
}
});

matsu_sparql.regex.cljs$lang$maxFixedArity = (2);

matsu_sparql.regex.cljs$lang$applyTo = (function (seq5733){
var G__5734 = cljs.core.first.call(null,seq5733);
var seq5733__$1 = cljs.core.next.call(null,seq5733);
var G__5735 = cljs.core.first.call(null,seq5733__$1);
var seq5733__$2 = cljs.core.next.call(null,seq5733__$1);
return matsu_sparql.regex.cljs$core$IFn$_invoke$arity$variadic(G__5734,G__5735,seq5733__$2);
});
matsu_sparql.lang_matches = (function matsu_sparql$lang_matches(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.lang_matches.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.lang_matches.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"langMatches",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),", "], null);
});

matsu_sparql.lang_matches.cljs$lang$maxFixedArity = (0);

matsu_sparql.lang_matches.cljs$lang$applyTo = (function (seq5736){
return matsu_sparql.lang_matches.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5736));
});
matsu_sparql.same_term = (function matsu_sparql$same_term(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.same_term.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.same_term.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"sameTerm",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),", "], null);
});

matsu_sparql.same_term.cljs$lang$maxFixedArity = (0);

matsu_sparql.same_term.cljs$lang$applyTo = (function (seq5737){
return matsu_sparql.same_term.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5737));
});
matsu_sparql._BANG_same_term = (function matsu_sparql$_BANG_same_term(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql._BANG_same_term.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql._BANG_same_term.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"!sameTerm",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),", "], null);
});

matsu_sparql._BANG_same_term.cljs$lang$maxFixedArity = (0);

matsu_sparql._BANG_same_term.cljs$lang$applyTo = (function (seq5738){
return matsu_sparql._BANG_same_term.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5738));
});
matsu_sparql.is_iri = (function matsu_sparql$is_iri(term){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"isIRI",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),""], null);
});
matsu_sparql.is_blank = (function matsu_sparql$is_blank(term){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"isBlank",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),""], null);
});
matsu_sparql.is_literal = (function matsu_sparql$is_literal(term){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"isLiteral",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),""], null);
});
matsu_sparql.is_numeric = (function matsu_sparql$is_numeric(term){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"isNumeric",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),""], null);
});
matsu_sparql.is_literal = (function matsu_sparql$is_literal(term){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"isLiteral",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),""], null);
});
matsu_sparql.str2 = (function matsu_sparql$str2(term){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"str",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),""], null);
});
matsu_sparql.lang = (function matsu_sparql$lang(literal){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"lang",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [literal], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),""], null);
});
matsu_sparql.datatype = (function matsu_sparql$datatype(literal){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"datatype",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [literal], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"sep","sep",1970430530),""], null);
});
matsu_sparql.with$ = (function matsu_sparql$with(q,uri){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"WITH",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri], null)], null));
});
matsu_sparql.insert_data = (function matsu_sparql$insert_data(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.insert_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.insert_data.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"INSERT DATA",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" { "," }"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more)], null));
});

matsu_sparql.insert_data.cljs$lang$maxFixedArity = (1);

matsu_sparql.insert_data.cljs$lang$applyTo = (function (seq5739){
var G__5740 = cljs.core.first.call(null,seq5739);
var seq5739__$1 = cljs.core.next.call(null,seq5739);
return matsu_sparql.insert_data.cljs$core$IFn$_invoke$arity$variadic(G__5740,seq5739__$1);
});
matsu_sparql.delete_data = (function matsu_sparql$delete_data(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.delete_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.delete_data.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"DELETE DATA",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" { "," }"], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more)], null));
});

matsu_sparql.delete_data.cljs$lang$maxFixedArity = (1);

matsu_sparql.delete_data.cljs$lang$applyTo = (function (seq5741){
var G__5742 = cljs.core.first.call(null,seq5741);
var seq5741__$1 = cljs.core.next.call(null,seq5741);
return matsu_sparql.delete_data.cljs$core$IFn$_invoke$arity$variadic(G__5742,seq5741__$1);
});
matsu_sparql.insert = (function matsu_sparql$insert(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.insert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.insert.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"INSERT",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" { "," } "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more)], null));
});

matsu_sparql.insert.cljs$lang$maxFixedArity = (1);

matsu_sparql.insert.cljs$lang$applyTo = (function (seq5743){
var G__5744 = cljs.core.first.call(null,seq5743);
var seq5743__$1 = cljs.core.next.call(null,seq5743);
return matsu_sparql.insert.cljs$core$IFn$_invoke$arity$variadic(G__5744,seq5743__$1);
});
matsu_sparql.delete$ = (function matsu_sparql$delete(){
var argseq__5339__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return matsu_sparql.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5339__auto__);
});

matsu_sparql.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"DELETE",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" { "," } "], null),new cljs.core.Keyword(null,"sep","sep",1970430530)," ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more)], null));
});

matsu_sparql.delete$.cljs$lang$maxFixedArity = (1);

matsu_sparql.delete$.cljs$lang$applyTo = (function (seq5745){
var G__5746 = cljs.core.first.call(null,seq5745);
var seq5745__$1 = cljs.core.next.call(null,seq5745);
return matsu_sparql.delete$.cljs$core$IFn$_invoke$arity$variadic(G__5746,seq5745__$1);
});
matsu_sparql._BANG__SHARP_ = (function matsu_sparql$_BANG__SHARP_(comment){
return matsu_sparql.raw.call(null,[cljs.core.str("\n# "),cljs.core.str(comment),cljs.core.str(" .\n")].join(''));
});
matsu_sparql.subselect = (function matsu_sparql$subselect(){
var argseq__5339__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return matsu_sparql.subselect.cljs$core$IFn$_invoke$arity$variadic(argseq__5339__auto__);
});

matsu_sparql.subselect.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"SELECT ",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.vec.call(null,more),new cljs.core.Keyword(null,"sep","sep",1970430530)," "], null);
});

matsu_sparql.subselect.cljs$lang$maxFixedArity = (0);

matsu_sparql.subselect.cljs$lang$applyTo = (function (seq5747){
return matsu_sparql.subselect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5747));
});
matsu_sparql.defmacro.call(null,matsu_sparql.subquery,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [matsu_sparql.args,matsu_sparql._AMPERSAND_,matsu_sparql.body], null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("matsu_sparql","group","matsu_sparql/group",-1488792723,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("matsu_sparql","subselect","matsu_sparql/subselect",-1553087457,null)),matsu_sparql.args)))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("matsu_sparql","group","matsu_sparql/group",-1488792723,null)),matsu_sparql.body))))))));
matsu_sparql.prefix = (function matsu_sparql$prefix(q,more){
return cljs.core.assoc.call(null,q,new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"",new cljs.core.Keyword(null,"content","content",15833224),more,new cljs.core.Keyword(null,"bounds","bounds",1691609455),"",new cljs.core.Keyword(null,"sep","sep",1970430530),""], null));
});
matsu_sparql.raw = (function matsu_sparql$raw(string){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"",new cljs.core.Keyword(null,"sep","sep",1970430530),"",new cljs.core.Keyword(null,"bounds","bounds",1691609455),"",new cljs.core.Keyword(null,"content","content",15833224),string], null);
});

//# sourceMappingURL=matsu_sparql.js.map
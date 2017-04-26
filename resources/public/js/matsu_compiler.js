// Compiled by ClojureScript 0.0-3211 {}
goog.provide('matsu_compiler');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('matsu_core');
/**
 * esacpes double quotes in strings
 */
matsu_compiler.escape_str = (function matsu_compiler$escape_str(s){
return clojure.string.replace.call(null,s,/\"/,"\\\\\"");
});
/**
 * Encodes keywords to ?-prefixed variables and other values to RDF literals
 * when applicable.
 * 
 * Vectors are interpreted differently according to their contents:
 * 
 * [keyword keyword] => prefixed name
 * [string string]   => literal^^string (typed literal)
 * [string keyword]  => string with language tag
 * [keyword]         => <keyword> - to be used with BASE
 * [map keyword]     => (:content map) AS keyword
 * [[:keyword]]      => _:keyword (blank node)
 * [[]]              => []
 * 
 * Maps are expaned and compiled according to its contents, tag, bounds and
 * separator
 */
matsu_compiler.encode = (function matsu_compiler$encode(x){
if((x == null)){
return "";
} else {
if(cljs.core.truth_(matsu_compiler.char_QMARK_.call(null,x))){
return x;
} else {
if((x instanceof cljs.core.Symbol)){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return [cljs.core.str("?"),cljs.core.str(cljs.core.name.call(null,x))].join('');
} else {
if(cljs.core.integer_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.truth_(matsu_compiler.float_QMARK_.call(null,x))){
return x;
} else {
if(x === true){
return x;
} else {
if(x === false){
return x;
} else {
if(typeof x === 'string'){
return [cljs.core.str("\""),cljs.core.str(matsu_compiler.escape_str.call(null,x)),cljs.core.str("\"")].join('');
} else {
if(cljs.core._EQ_.call(null,java.net.URI,cljs.core.type.call(null,x))){
return [cljs.core.str("<"),cljs.core.str(x),cljs.core.str(">")].join('');
} else {
if(cljs.core._EQ_.call(null,org.joda.time.DateTime,cljs.core.type.call(null,x))){
return matsu_compiler$encode.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(x)].join(''),"xsd:dateTime"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var vec__5660 = x;
var a = cljs.core.nth.call(null,vec__5660,(0),null);
var b = cljs.core.nth.call(null,vec__5660,(1),null);
if(cljs.core.vector_QMARK_.call(null,a)){
if(cljs.core.seq.call(null,a)){
return [cljs.core.str(new cljs.core.Symbol(null,"_","_",-1201019570,null)),cljs.core.str(cljs.core.first.call(null,a))].join('');
} else {
return "[]";
}
} else {
if(cljs.core.not.call(null,b)){
return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,a)),cljs.core.str(">")].join('');
} else {
if(((b instanceof cljs.core.Keyword)) && (typeof a === 'string')){
return [cljs.core.str("\""),cljs.core.str(matsu_compiler.escape_str.call(null,a)),cljs.core.str("\"@"),cljs.core.str(cljs.core.name.call(null,b))].join('');
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,x)){
return [cljs.core.str(matsu_compiler$encode.call(null,a)),cljs.core.str("^^"),cljs.core.str(b)].join('');
} else {
if((cljs.core.map_QMARK_.call(null,a)) && ((b instanceof cljs.core.Keyword))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),cljs.core.conj.call(null,matsu_compiler.sub_compiler.call(null,a)," AS ",matsu_compiler$encode.call(null,b),")"));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,x)){
return [cljs.core.str(cljs.core.name.call(null,a)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,b))].join('');
} else {
return "cannot encode!";

}
}
}
}
}
}
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return matsu_compiler.sub_compiler.call(null,x);
} else {
if((x instanceof clojure.lang.LazySeq)){
var iter__5053__auto__ = (function matsu_compiler$encode_$_iter__5661(s__5662){
return (new cljs.core.LazySeq(null,(function (){
var s__5662__$1 = s__5662;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5662__$1);
if(temp__4657__auto__){
var s__5662__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5662__$2)){
var c__5051__auto__ = cljs.core.chunk_first.call(null,s__5662__$2);
var size__5052__auto__ = cljs.core.count.call(null,c__5051__auto__);
var b__5664 = cljs.core.chunk_buffer.call(null,size__5052__auto__);
if((function (){var i__5663 = (0);
while(true){
if((i__5663 < size__5052__auto__)){
var part = cljs.core._nth.call(null,c__5051__auto__,i__5663);
cljs.core.chunk_append.call(null,b__5664,matsu_compiler$encode.call(null,part));

var G__5665 = (i__5663 + (1));
i__5663 = G__5665;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5664),matsu_compiler$encode_$_iter__5661.call(null,cljs.core.chunk_rest.call(null,s__5662__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5664),null);
}
} else {
var part = cljs.core.first.call(null,s__5662__$2);
return cljs.core.cons.call(null,matsu_compiler$encode.call(null,part),matsu_compiler$encode_$_iter__5661.call(null,cljs.core.rest.call(null,s__5662__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5053__auto__.call(null,cljs.core.interpose.call(null," ",x));
} else {
throw (new matsu_compiler.Exception(matsu_compiler.format.call(null,"Don't know how to encode %s in an SPARQL context",x)));

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
/**
 * Used to replace clojure fn symbols with characters inside expressions
 */
matsu_compiler.replacement_map = new cljs.core.PersistentArrayMap.fromArray([cljs.core._EQ_,"=",cljs.core._GT_,">",cljs.core._LT_,"<",cljs.core._STAR_,"*",cljs.core._PLUS_,"+",cljs.core._,"-",cljs.core._GT__EQ_,new cljs.core.Symbol(null,">=",">=",1016916022,null),cljs.core._LT__EQ_,new cljs.core.Symbol(null,"<=","<=",1244895369,null)], true, false);
matsu_compiler.compiler = (function matsu_compiler$compiler(q,part){
var temp__4657__auto__ = part.call(null,q);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return matsu_compiler.sub_compiler.call(null,m);
} else {
return null;
}
});
matsu_compiler.sub_compiler = (function matsu_compiler$sub_compiler(m){
return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m),((cljs.core.seq.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(m)))?cljs.core.first.call(null,new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(m)):null),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"sep","sep",1970430530).cljs$core$IFn$_invoke$arity$1(m),(function (){var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(m);
return cljs.core.map.call(null,matsu_compiler.encode,clojure.walk.postwalk_replace.call(null,matsu_compiler.replacement_map,content));
})()),((cljs.core.seq.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(m)))?cljs.core.last.call(null,new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(m)):" ")],null));
});
/**
 * Finds all occurences of the pattern 'prefix:name' in the query string.
 * Returns the query string with the namespaces prefixed.
 */
matsu_compiler.infer_prefixes = (function matsu_compiler$infer_prefixes(m,s){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.apply.call(null,cljs.core.sorted_set,(function (){var cleaned_string = clojure.string.replace.call(null,s,/\".*\"/,"");
var iter__5053__auto__ = ((function (cleaned_string){
return (function matsu_compiler$infer_prefixes_$_iter__5675(s__5676){
return (new cljs.core.LazySeq(null,((function (cleaned_string){
return (function (){
var s__5676__$1 = s__5676;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5676__$1);
if(temp__4657__auto__){
var s__5676__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5676__$2)){
var c__5051__auto__ = cljs.core.chunk_first.call(null,s__5676__$2);
var size__5052__auto__ = cljs.core.count.call(null,c__5051__auto__);
var b__5678 = cljs.core.chunk_buffer.call(null,size__5052__auto__);
if((function (){var i__5677 = (0);
while(true){
if((i__5677 < size__5052__auto__)){
var vec__5681 = cljs.core._nth.call(null,c__5051__auto__,i__5677);
var _ = cljs.core.nth.call(null,vec__5681,(0),null);
var p = cljs.core.nth.call(null,vec__5681,(1),null);
if(cljs.core.not_any_QMARK_.call(null,((function (i__5677,s__5676__$1,vec__5681,_,p,c__5051__auto__,size__5052__auto__,b__5678,s__5676__$2,temp__4657__auto__,cleaned_string){
return (function (p1__5666_SHARP_){
return cljs.core._EQ_.call(null,p,p1__5666_SHARP_);
});})(i__5677,s__5676__$1,vec__5681,_,p,c__5051__auto__,size__5052__auto__,b__5678,s__5676__$2,temp__4657__auto__,cleaned_string))
,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["mailto",null,"bif",null,"sql",null], null), null))){
cljs.core.chunk_append.call(null,b__5678,[cljs.core.str("PREFIX "),cljs.core.str(p),cljs.core.str(": "),cljs.core.str(matsu_core.ns_or_error.call(null,cljs.core.keyword.call(null,p),m)),cljs.core.str(" ")].join(''));

var G__5683 = (i__5677 + (1));
i__5677 = G__5683;
continue;
} else {
var G__5684 = (i__5677 + (1));
i__5677 = G__5684;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5678),matsu_compiler$infer_prefixes_$_iter__5675.call(null,cljs.core.chunk_rest.call(null,s__5676__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5678),null);
}
} else {
var vec__5682 = cljs.core.first.call(null,s__5676__$2);
var _ = cljs.core.nth.call(null,vec__5682,(0),null);
var p = cljs.core.nth.call(null,vec__5682,(1),null);
if(cljs.core.not_any_QMARK_.call(null,((function (s__5676__$1,vec__5682,_,p,s__5676__$2,temp__4657__auto__,cleaned_string){
return (function (p1__5666_SHARP_){
return cljs.core._EQ_.call(null,p,p1__5666_SHARP_);
});})(s__5676__$1,vec__5682,_,p,s__5676__$2,temp__4657__auto__,cleaned_string))
,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["mailto",null,"bif",null,"sql",null], null), null))){
return cljs.core.cons.call(null,[cljs.core.str("PREFIX "),cljs.core.str(p),cljs.core.str(": "),cljs.core.str(matsu_core.ns_or_error.call(null,cljs.core.keyword.call(null,p),m)),cljs.core.str(" ")].join(''),matsu_compiler$infer_prefixes_$_iter__5675.call(null,cljs.core.rest.call(null,s__5676__$2)));
} else {
var G__5685 = cljs.core.rest.call(null,s__5676__$2);
s__5676__$1 = G__5685;
continue;
}
}
} else {
return null;
}
break;
}
});})(cleaned_string))
,null,null));
});})(cleaned_string))
;
return iter__5053__auto__.call(null,cljs.core.re_seq.call(null,/(\b[a-zA-Z0-9]+):[a-zA-Z]/,cleaned_string));
})()))),cljs.core.str(s)].join('');
});
/**
 * Prefixes the query string with 'BASE <uri>'
 */
matsu_compiler.add_base = (function matsu_compiler$add_base(uri,s){
if((uri == null)){
return s;
} else {
return [cljs.core.str("BASE "),cljs.core.str(matsu_compiler.encode.call(null,uri)),cljs.core.str(" "),cljs.core.str(s)].join('');
}
});
/**
 * Takes a map representing SPARQL graph patterns, bindings and modifiers and
 * returns a vaild SPARQL 1.1 query string
 */
matsu_compiler.compile_query = (function matsu_compiler$compile_query(q){
var base = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(q);
var local_prefixes = new cljs.core.Keyword(null,"local-prefixes","local-prefixes",-1807170140).cljs$core$IFn$_invoke$arity$1(q);
return clojure.string.trim.call(null,matsu_compiler.add_base.call(null,base,matsu_compiler.infer_prefixes.call(null,local_prefixes,clojure.string.join.call(null,cljs.core.flatten.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__5053__auto__ = ((function (base,local_prefixes){
return (function matsu_compiler$compile_query_$_iter__5690(s__5691){
return (new cljs.core.LazySeq(null,((function (base,local_prefixes){
return (function (){
var s__5691__$1 = s__5691;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5691__$1);
if(temp__4657__auto__){
var s__5691__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5691__$2)){
var c__5051__auto__ = cljs.core.chunk_first.call(null,s__5691__$2);
var size__5052__auto__ = cljs.core.count.call(null,c__5051__auto__);
var b__5693 = cljs.core.chunk_buffer.call(null,size__5052__auto__);
if((function (){var i__5692 = (0);
while(true){
if((i__5692 < size__5052__auto__)){
var part = cljs.core._nth.call(null,c__5051__auto__,i__5692);
cljs.core.chunk_append.call(null,b__5693,matsu_compiler.compiler.call(null,q,part));

var G__5694 = (i__5692 + (1));
i__5692 = G__5694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5693),matsu_compiler$compile_query_$_iter__5690.call(null,cljs.core.chunk_rest.call(null,s__5691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5693),null);
}
} else {
var part = cljs.core.first.call(null,s__5691__$2);
return cljs.core.cons.call(null,matsu_compiler.compiler.call(null,q,part),matsu_compiler$compile_query_$_iter__5690.call(null,cljs.core.rest.call(null,s__5691__$2)));
}
} else {
return null;
}
break;
}
});})(base,local_prefixes))
,null,null));
});})(base,local_prefixes))
;
return iter__5053__auto__.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"query-form","query-form",-1377995078),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"from-named","from-named",-356331277),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"group-by","group-by",-379139802),new cljs.core.Keyword(null,"having","having",-399543166)], null));
})()))))));
});

//# sourceMappingURL=matsu_compiler.js.map
// Compiled by ClojureScript 0.0-3211 {}
goog.provide('matsu_util');
goog.require('cljs.core');
goog.require('clojure.string');
matsu_util.before2 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["DELETE",null,"VALUES",null,"MODIFY",null,"WHERE",null,"INSERT",null,"SELECT",null,"WITH",null], null), null);
matsu_util.before = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["BASE",null,"FROM",null,"OPTIONAL",null,"PREFIX",null], null), null);
matsu_util.after = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [".",null,";",null], null), null);
matsu_util.both = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["{",null,"}",null], null), null);
/**
 * Insert newline before and after certain SPARQL keywords and syntatic signifiers.
 */
matsu_util.insert_newlines = (function matsu_util$insert_newlines(s){
return clojure.string.join.call(null," ",(function (){var iter__5053__auto__ = (function matsu_util$insert_newlines_$_iter__5754(s__5755){
return (new cljs.core.LazySeq(null,(function (){
var s__5755__$1 = s__5755;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__5755__$1);
if(temp__4657__auto__){
var s__5755__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5755__$2)){
var c__5051__auto__ = cljs.core.chunk_first.call(null,s__5755__$2);
var size__5052__auto__ = cljs.core.count.call(null,c__5051__auto__);
var b__5757 = cljs.core.chunk_buffer.call(null,size__5052__auto__);
if((function (){var i__5756 = (0);
while(true){
if((i__5756 < size__5052__auto__)){
var elem = cljs.core._nth.call(null,c__5051__auto__,i__5756);
var e = cljs.core.first.call(null,elem);
cljs.core.chunk_append.call(null,b__5757,((cljs.core.contains_QMARK_.call(null,matsu_util.before2,e))?[cljs.core.str("\n \n"),cljs.core.str(e)].join(''):((cljs.core.contains_QMARK_.call(null,matsu_util.before,e))?[cljs.core.str("\n"),cljs.core.str(e)].join(''):((cljs.core.contains_QMARK_.call(null,matsu_util.after,e))?[cljs.core.str(e),cljs.core.str("\n")].join(''):((cljs.core.contains_QMARK_.call(null,matsu_util.both,e))?[cljs.core.str("\n"),cljs.core.str(e),cljs.core.str("\n")].join(''):e
)))));

var G__5758 = (i__5756 + (1));
i__5756 = G__5758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5757),matsu_util$insert_newlines_$_iter__5754.call(null,cljs.core.chunk_rest.call(null,s__5755__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5757),null);
}
} else {
var elem = cljs.core.first.call(null,s__5755__$2);
var e = cljs.core.first.call(null,elem);
return cljs.core.cons.call(null,((cljs.core.contains_QMARK_.call(null,matsu_util.before2,e))?[cljs.core.str("\n \n"),cljs.core.str(e)].join(''):((cljs.core.contains_QMARK_.call(null,matsu_util.before,e))?[cljs.core.str("\n"),cljs.core.str(e)].join(''):((cljs.core.contains_QMARK_.call(null,matsu_util.after,e))?[cljs.core.str(e),cljs.core.str("\n")].join(''):((cljs.core.contains_QMARK_.call(null,matsu_util.both,e))?[cljs.core.str("\n"),cljs.core.str(e),cljs.core.str("\n")].join(''):e
)))),matsu_util$insert_newlines_$_iter__5754.call(null,cljs.core.rest.call(null,s__5755__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5053__auto__.call(null,cljs.core.re_seq.call(null,/[^\s\"']+|\"([^\"]*)\"|'([^']*)'/,s));
})());
});
/**
 * Indents lines following brackets and lines following semicolon (same subject)
 */
matsu_util.insert_indentation = (function matsu_util$insert_indentation(s){
return clojure.string.join.call(null,"\n",(function (){var lines = clojure.string.split_lines.call(null,s);
var result = cljs.core.PersistentVector.EMPTY;
var indent = "";
var same_subject = "";
while(true){
var line = cljs.core.first.call(null,lines);
var add_indent = (cljs.core.truth_(cljs.core.re_matches.call(null,/\{/,[cljs.core.str(line)].join('')))?[cljs.core.str(indent),cljs.core.str("   ")].join(''):false);
var remove_indent = (cljs.core.truth_(cljs.core.re_matches.call(null,/\}/,[cljs.core.str(line)].join('')))?clojure.string.join.call(null,cljs.core.drop.call(null,(3),indent)):false);
var semicolon = (cljs.core.truth_(cljs.core.re_find.call(null,/;/,[cljs.core.str(line)].join('')))?((cljs.core._EQ_.call(null,same_subject,""))?clojure.string.join.call(null,cljs.core.repeat.call(null,(cljs.core.count.call(null,cljs.core.re_find.call(null,/[^\s]*/,[cljs.core.str(line)].join(''))) + (1))," ")):same_subject):"");
var indentstring = (cljs.core.truth_(remove_indent)?remove_indent:indent);
if(cljs.core.empty_QMARK_.call(null,lines)){
return result;
} else {
var G__5759 = cljs.core.rest.call(null,lines);
var G__5760 = cljs.core.conj.call(null,result,[cljs.core.str(same_subject),cljs.core.str(indentstring),cljs.core.str(line)].join(''));
var G__5761 = (cljs.core.truth_(add_indent)?add_indent:(cljs.core.truth_(remove_indent)?remove_indent:indent
));
var G__5762 = (cljs.core.truth_(semicolon)?semicolon:"");
lines = G__5759;
result = G__5760;
indent = G__5761;
same_subject = G__5762;
continue;
}
break;
}
})());
});
/**
 * A very crude regex-based SPARQL pretty-printer.
 */
matsu_util.pprint = (function matsu_util$pprint(s){
return clojure.string.trim.call(null,matsu_util.insert_indentation.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,matsu_util.insert_newlines.call(null,s),/\n\s/,"\n"),/\s\n/,"\n")));
});

//# sourceMappingURL=matsu_util.js.map
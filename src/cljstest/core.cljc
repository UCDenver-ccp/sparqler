(ns cljstest.core)
#?(:cljs (:require-macros [cljtest.terms :as t])
    :clj  (:require [cljtest.terms :at t]))

(defn abs
  "Absolute value of a number
~~~klipse
  (map abs (range -5 5))
~~~
"
[x]
  (max x (- x)))


(defn testquery
  "Test Query
~~~klipse
  rdfs:label
~~~
  "
  []
  (print cljtest.terms/rdfs:label))

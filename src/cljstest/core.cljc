(ns cljstest.core
  (:require [cljstest.terms :refer [rdfs:label]]))

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
  (print rdfs:label))

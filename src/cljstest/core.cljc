(ns cljstest.core (:require [cljstest.terms :as t]))

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
  t/rdfs:label
~~~
  "
[]
  (print t/rdfs:label))

(ns cljstest.core (:require [cljstest.terms :as terms]))

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
  terms/rdfs:label
~~~
  "
[]
  (print terms/rdfs:label))

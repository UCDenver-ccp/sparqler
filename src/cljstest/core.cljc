(ns cljstest.core
   (:use cljstest.terms))

(defn abs
  "Absolute value of a number
~~~klipse
  (map abs (range -5 5))
~~~
"
[x]
  (max x (- x)))


(defn test-query
  "Test Query
~~~klipse
  rdfs:label
~~~
  "
  []
  (print rdfs:label))

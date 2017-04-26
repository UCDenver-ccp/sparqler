(ns cljstest.core)
(require-macros [cljtest.terms :as t])

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
  (print t/rdfs:label))

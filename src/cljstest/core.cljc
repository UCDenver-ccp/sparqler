(ns cljstest.core)

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
  (print "hi"))

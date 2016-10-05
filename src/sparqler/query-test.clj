;; gorilla-repl.fileformat = 1

;; **
;;; # Gorilla REPL
;;; 
;;; Welcome to gorilla :-)
;;; 
;;; Shift + enter evaluates code. Hit ctrl+g twice in quick succession or click the menu icon (upper-right corner) for more commands ...
;;; 
;;; It's a good habit to run each worksheet in its own namespace: feel free to use the declaration we've provided below if you'd like.
;; **

;; @@
(ns sparqlr.example
  (:require [sparqlr.core])
  (:use sparqlr.core)
  (:refer-clojure :exclude [filter concat group-by max min count update])
  (:require [boutros.matsu.compiler :refer [encode]]
            [boutros.matsu.core :refer [register-namespaces]]
            [boutros.matsu.sparql :refer :all]
            [boutros.matsu.util])
  (:require [gorilla-repl.table :as table])
  (:require loom.graph)
  (:require [clj-sparql.core :referl :all :as sparql])
  (:use clojure.java.browse)
  (:import java.net.URI
           [java.net URLEncoder URLDecoder]))
;; @@
;; =>
;;; {"type":"html","content":"<span class='clj-nil'>nil</span>","value":"nil"}
;; <=

;; @@
(defquery annotations (n)
  (select :s :t :x :st)
  (where :o rdfs:label n \.
         :s :p :o \.
         :s rdf:type [:owl :Axiom] \.
         :s [:oboinowl :hasDbXref] :x \.
         :s [:owl :annotatedTarget] :t \.	
         :s [:oboinowl :hasSynonymType] CHEBI:InChI))

;; @@
;; =>
;;; {"type":"html","content":"<span class='clj-var'>#&#x27;sparqlr.example/annotations</span>","value":"#'sparqlr.example/annotations"}
;; <=

;; @@
(table/table-view (kabob-query (annotations "water")))
;; @@

;; @@

;; @@

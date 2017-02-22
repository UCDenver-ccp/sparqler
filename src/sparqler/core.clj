(ns sparqler.core
   (:refer-clojure :exclude [filter concat group-by max min count update])
   (:require [boutros.matsu.compiler :refer [encode]]
             [boutros.matsu.core :refer [register-namespaces]]
             [boutros.matsu.util])
   (:use sparqler.terms)
   (:use sparqler.forms)
   (:use sparqler.queries)
   (:use boutros.matsu.sparql)
   (:require [clojure.string :as string])
   (:require [clj-sparql.core :referl :all :as sparql])
   (:use clojure.java.browse)
   (:import java.net.URI [java.net URLEncoder URLDecoder])
   (:gen-class))                                     

; Print

(def kabob {:endpoint "http://amc-tantor.ucdenver.pvt:10035/repositories/kabob-dev" :user "secret" :pass "secret"})

(def local {:endpoint "http://localhost:8890/sparql"})


;;(doall (map #(URI. (:gene %1)) genes))

(defrecord GO [URI Accession Name Ontology])
(defmethod print-method GO [term ^java.io.Writer w]
  ;if it's empty, look it up
  (print (str (.Name term) " (" (.Accession term) ")")))

(defn kabob-query [q] (sparql/query kabob q))
(defn local-query [q] (sparql/query local q))
(defn go:? [id])

(defquery po [s] (select :p :o) (where- s :p :o))
(defquery sp [o] (select :s :p) (where- :s :p o))

(defquery define [uri] (select :definition) (where- uri iao:defines :definition))
(defquery synonym [uri] (select :synonym) (where- uri oboinowl:hasRelatedSynonym :synonym))
(defquery xref [uri] (select :xref) (where- uri oboinowl:hasDbXref :xref))

(defquery label [l] (select :uri) (where :uri rdfs:label :label \. (filter (regex :label l))))

(defquery labelOf [uri] (select :l) (where uri rdfs:label :l))

(defquery labell [l lang] (select :uri) (where :uri rdfs:label l (raw lang)))

(defn kabob-label [name] (kabob-query (label name)))
(defn kabob-define [object] (kabob-query (define (.URI object))))
(defn kabob-po [object] (kabob-query (po (.URI object))))
(defn kabob-synonym [object] (kabob-query (synonym (.URI object))))
(defn kabob-xref [object] (kabob-query (xref (.URI object))))
; kabob-xref-hmdb

(defn webview [uri]
  (def url (str "http://amc-tantor.ucdenver.pvt:10035/repositories/kabob-dev#node/%3c" uri "%3e"))
  (prn url)
  (browse-url url))

(defn webview-query [q]
  (def url (str "http://amc-tantor.ucdenver.pvt:10035/repositories/kabob-dev#query/d/"
                (clojure.string/replace (URLEncoder/encode q "UTF-8") "+" "%20")))
  (prn url)
  (browse-url url))

(defn webchebi [s]
  (browse-url (str "http://www.ebi.ac.uk/chebi/advancedSearchFT.do?searchString=" s)))

(defn webview-key [c k]
  (for [{u k} c] (webview u)))


(defquery predicate [u] (select :p :o) (where u :p :o))



(defrecord PROTEIN [URI])
(defrecord ENZYME [URI])
(defrecord REACTION [URI])
(defrecord MOLECULE [URI])
(defmethod print-method MOLECULE [v ^java.io.Writer w]
  (.write w (str "A MOLECULE with URI " (.URI v) " and label " (:l (first (kabob-query (labelOf (.URI v))))))))


(defrecord GENE [URI])
(defmethod print-method GENE [v ^java.io.Writer w]
  (.write w [:URI v]))


;; sparqlr.core> (kabob-query (localize iaouniprotHUMAN_CYC))

;; |                      :location_name |                           :location_class |
;; |-------------------------------------+-------------------------------------------|
;; |                       mitochondrion | http://purl.obolibrary.org/obo/GO_0005739 |
;; | protein phosphatase type 2A complex | http://purl.obolibrary.org/obo/GO_0000159 |
;; |   mitochondrial intermembrane space | http://purl.obolibrary.org/obo/GO_0005758 |
;; |        mitochondrial inner membrane | http://purl.obolibrary.org/obo/GO_0005743 |
;; |                             nucleus | http://purl.obolibrary.org/obo/GO_0005634 |
;; |                             cytosol | http://purl.obolibrary.org/obo/GO_0005829 |
;; |                   respiratory chain | http://purl.obolibrary.org/obo/GO_0070469 |
;; |                             nucleus | http://purl.obolibrary.org/obo/GO_0005634 |

;; (defn flat [coll]
;;   (lazy-seq
;;     (when-let [s (seq coll)]
;;       (if (list? (first s))
;;         (clojure.core/concat (flat (first s)) (flat (rest s)))
;;         (cons (first s) (flat (rest s)))))))

(defn where+ [q & more]
  (assoc q :where {:tag "WHERE" :content (vec (flat more)) :bounds [" { " " } "] :sep " "}))

(defn group_concat [v sep as]
  {:tag "(GROUP_CONCAT" :bounds ["(" (str ") AS " (encode as) ")")] :sep "; separator = " :content [v sep]})


;;;;;;;;;;;;;

;(def result (sparql/query kabob (localize [:iaouniprot :UNIPROT_P99999_ICE])))
;(def human-genes (kabob-query (by-taxon Human)))
;(def locations (kabob-query (localize iaouniprotHUMAN_CYC)))
;(def g (->MOLECULE (URI. (:uri (first (kabob-query (label "glucose")))))))



(defn inchi [n] (annotation n CHEBI:InChI))

(defn ->URI [result]
  (mapcat (fn [x] (URI. (:uri x))) result))





(defn square
  "Squares the supplied number."
  [x]
  (* x x))

(defn abs
  "Absolute value of a number
~~~klipse
  (map abs (range -5 5))
~~~
"
[x]
  (max x (- x)))


(defn -main
  [& args]
  
  (prn (format "args=%s" args))
  )

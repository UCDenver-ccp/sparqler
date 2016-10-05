
(in-ns 'sparqler.core)



(defn group_concat [v sep as]
  {:tag "(GROUP_CONCAT" :bounds ["(" (str ") AS " (encode as) ")")] :sep "; separator = " :content [v sep]})


(defquery kevin []

;;   select ?eg_ice (group_concat(?term_name; separator = "|") AS ?nbo_term_names) {
  (select :eg_ice (group_concat :term_name "|" :nbo_term_names))

  
  (where-

   (values :eg_ice
          [:eg :EG_1636_ICE]
          [:eg :EG_52_ICE]
          [:eg :EG_150_ICE]
          [:eg :EG_158_ICE]
          [:eg :EG_57679_ICE]
          [:eg :EG_348_ICE]
          [:eg :EG_627_ICE]
          [:eg :EG_1394_ICE]
          [:eg :EG_1621_ICE]
          [:eg :EG_1815_ICE]
          [:eg :EG_79813_ICE]
          [:eg :EG_2121_ICE]
          [:eg :EG_2289_ICE]
          [:eg :EG_2332_ICE]
          [:eg :EG_79068_ICE]
          [:eg :EG_2760_ICE]
          [:eg :EG_2896_ICE]
          [:eg :EG_9569_ICE]
          [:eg :EG_3350_ICE]
          [:eg :EG_3356_ICE]
          [:eg :EG_3064_ICE]
          [:eg :EG_9516_ICE]
          [:eg :EG_4128_ICE]
          [:eg :EG_4669_ICE]
          [:eg :EG_340719_ICE]
          [:eg :EG_4842_ICE]
          [:eg :EG_5009_ICE]
          [:eg :EG_8398_ICE]
          [:eg :EG_84152_ICE]
          [:eg :EG_5538_ICE]
          [:eg :EG_5582_ICE]
          [:eg :EG_5663_ICE]
          [:eg :EG_5972_ICE]
          [:eg :EG_6334_ICE]
          [:eg :EG_9672_ICE]
          [:eg :EG_85358_ICE]
          [:eg :EG_6532_ICE]
          [:eg :EG_6999_ICE]
          [:eg :EG_7166_ICE]
          [:eg :EG_121278_ICE]
          [:eg :EG_54209_ICE]
          [:eg :EG_7305_ICE]
          [:eg :EG_23230_ICE]
          [:eg :EG_7466_ICE]
          [:eg :EG_7531_ICE] 
          )

   ;;(raw "# the EG ID denotes a kabob gene\n")
   
   ;;   ?eg_ice obo:IAO_0000219 ?gene .
   :eg_ice iao:denotes :gene \.

   ;; "\n# retrieve the taxonomy identifier for the gene just to make sure it is human (9606)\n")
   ;;   ?gene rdfs:subClassOf ?taxon_r .
   :gene rdfs:subClassOf :taxon_r \.
   ;;   ?taxon_r owl:onProperty obo:RO_0002162 .  #RO:in_taxon
   :taxon_r owl:onProperty RO:in_taxon \.
   ;;   ?taxon_r owl:someValuesFrom ?taxon .
   :taxon_r owl:someValuesFrom :taxon \.
  
   ;;(raw "\n# retrieve any homologous mouse genes (taxon=10090)\n")
   ;;   ?gene rdfs:subClassOf ?homologene_r .
   :gene rdfs:subClassOf :homologene_r \.
   ;;   ?homologene_r owl:onProperty obo:RO_0002158 . #RO:homologous_to
   :homologene_r owl:onProperty RO:homologous_to \.
   ;;   ?homologene_r owl:someValuesFrom ?homologous_mouse_gene .
   :homologene_r owl:someValuesFrom :homologous_mouse_gene \.
   ;;   ?homologous_mouse_gene rdfs:subClassOf ?taxon_r2 .
   :homologous_mouse_gene rdfs:subClassOf :taxon_r2 \.
   ;;   ?taxon_r2 owl:onProperty obo:RO_0002162 .  #RO:in_taxon
   :taxon_r2 owl:onProperty RO:in_taxon \.
   ;;   ?taxon_r2 owl:someValuesFrom obo:NCBITaxon_10090 .
   :taxon_r2 owl:someValuesFrom [:obo Mouse] \.
  
   ;;   # now look for NBO annotation ICE records that link mouse genes to NBO concepts
   ;;   ?ice obo:IAO_0000219 ?homologous_mouse_gene .
   :ice iao:denotes :homologous_mouse_gene \.
   ;;   ?id_field obo:IAO_0000219 ?ice .
   :id_field iao:denotes :ice \.
   ;;   ?id_field kiao:hasTemplate iaonbo:NboAnnotationFileRecord_geneIdDataField1 .
   :id_field kiao:hasTemplate [:iaonbo :NboAnnotationFileRecord_geneIdDataField1] \.
   ;;   ?record obo:BFO_0000051 ?id_field .
   :record BFO:hasPart :id_field \.
   ;;   ?record obo:BFO_0000051 ?term_name_field .
   :record BFO:hasPart :term_name_field \.
   ;;   ?term_name_field kiao:hasTemplate iaonbo:NboAnnotationFileRecord_nboTermNameDataField1 .
   :term_name_field kiao:hasTemplate [:iaonbo :NboAnnotationFileRecord_nboTermNameDataField1] \.
   ;;   ?term_name_field obo:IAO_0000219 ?term_name .
   :term_name_field iao:denotes :term_name \.
   
;; }
;; GROUP BY ?eg_ice


   )
  (group-by :eg_ice)
 
  )
  

               

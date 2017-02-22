(ns sparqler.forms
   (:use sparqler.terms)
   (:use boutros.matsu.sparql))


(defn with-interactions
  "proteins with interaction

~~~klipse
  (with-interactions :protein-class :protein-id)
~~~
"
  [protein-class interacting-protein-id]
  (subquery [protein-class interacting-protein-id]
            :protSub2 rdfs:subClassOf protein-class \.
            :r_hasp owl:someValuesFrom :protSub2 \.
            :r_hasp rdf:type owl:Restriction \.
            :r_hasp owl:onProperty RO:has_participant \.

            :interaction rdfs:subClassOf :r_hasp \.
            :interaction rdfs:subClassOf :rcard \.
            :rcard owl:cardinality 2 \. ;;# require 2 participants for a binary interaction
            :rcard owl:onProperty RO:has_participant \. ;#has_participant

            :interaction rdfs:subClassOf :r_hasp2 \.
            :r_hasp2 rdf:type owl:Restriction \.
            :r_hasp2 owl:onProperty RO:has_participant \. ;#has_participant
            :r_hasp2 owl:someValuesFrom :protSub3 \.
            
            :protSub3 rdfs:subClassOf :protClass3 \.
            :protClass3 rdfs:subClassOf :taxonRest \.
            :protClass3 rdfs:subClassOf* CHEBI:protein \.
            interacting-protein-id iao:denotes :protClass3 \.
            
            (filter :protSub3 != :protSub2) \.
            ))


(defn get-interactions [bio-id interaction_label partner_bio_id & {:keys [ p n] :or {p :protein_class n :protein_name }}]
  (list  :specificbioentity rdfs:subClassOf bio-id \.
          :has_participant_r1 owl:someValuesFrom :specificbioentity \.
          :has_participant_r1 owl:onProperty RO:has_participant \. ;# RO:has_participant
          :interaction rdfs:subClassOf :has_participant_r1 \.

          ;# confirm has_participant cardinality
          :interaction rdfs:subClassOf :rcard \.
          :rcard owl:cardinality 2 \. ;# require 2 participants for a binary interaction
          :rcard owl:onProperty RO:has_participant \. ;# RO:has_participant
          
          :interaction rdfs:subClassOf* MI:interaction_type \. ;# MI:interaction_type
          :interaction rdfs:label interaction_label \.
          
          :interaction rdfs:subClassOf :has_participant_r2 \.
          :has_participant_r2 owl:onProperty RO:has_participant \. ;# RO:has_participant
          :has_participant_r2 owl:someValuesFrom :interacting_partner \.
          :interacting_partner rdfs:subClassOf partner_bio_id \.
          (filter partner_bio_id != bio-id ) \.
          :partner_ice_id [:obo :IAO_0000219] partner_bio_id 
          ))


(defn of-protein [& {:keys [with-name p n] :or {p :protein_class n :protein_name }}]
  (list :of_restriction owl:someValuesFrom :protein_subclass \.
        :protein_subclass rdfs:subClassOf p \.
        p rdfs:subClassOf CHEBI:protein \. 
        :protein_name iao:denotes p \. 
        (filter n = with-name)))

(defn localized-to
  "the _thing_ is localized to _location_"
  [location thing]
  (list  ;;## A ## localized to mitochondrion
   :mito rdfs:subClassOf* location \. ;#mitochondrion

   :to1 rdf:type           owl:Restriction \.
   :to1  owl:someValuesFrom :mito \.
   :to1  owl:onProperty     [:kro :results_in_localization_to] \.
   
   :loc rdfs:subClassOf :to1 \.
   :loc rdfs:subClassOf [:obo :GO_0051179] \. ;#localization
   :loc rdfs:subClassOf :of1 \.
   
   :of1 rdf:type           owl:Restriction \.
   :of1  owl:onProperty     [:kro :results_in_localization_of] \.
   :of1  owl:someValuesFrom thing  \.))


(defn gene-or-gene-products [thing ggpv-abstraction]
  (subquery [thing ggpv-abstraction]
   ;;## B ## gene specific gene or gene product abstraction :gorgporv
   thing   rdfs:subClassOf*   ggpv-abstraction \.
   ggpv-abstraction  rdf:type         [:kbio :GeneSpecificGorGPorVClass]  \.))

(defn in-taxon [taxon ggpv-abstraction]
  (subquery [ggpv-abstraction]
    (!# (str "Gene or Gene Products in_taxon " taxon))
   ;;:gptaxon          rdfs:subClassOf*   ggpv-abstraction \.
   ;;:gptaxon          rdfs:subClassOf    :taxonrestriction  \.
   ggpv-abstraction  rdfs:subClassOf    :taxonrestriction  \.
   :taxonrestriction owl:onProperty     RO:in_taxon  \. ;#in_taxon
   :taxonrestriction owl:someValuesFrom taxon  \.)) 

(defn with-homolog [gene homolog taxon]
  (list
     gene rdfs:subClassOf :homologene_r \.
   ;;   ?homologene_r owl:onProperty obo:RO_0002158 . #RO:homologous_to
   :homologene_r owl:onProperty RO:homologous_to \.
   ;;   ?homologene_r owl:someValuesFrom ?homologous_mouse_gene .
   :homologene_r owl:someValuesFrom homolog \.
   ;;   ?homologous_mouse_gene rdfs:subClassOf ?taxon_r2 .
   homolog rdfs:subClassOf :taxon_r2 \.
   ;;   ?taxon_r2 owl:onProperty obo:RO_0002162 .  #RO:in_taxon
   :taxon_r2 owl:onProperty RO:in_taxon \.
   ;;   ?taxon_r2 owl:someValuesFrom obo:NCBITaxon_10090 .
  :taxon_r2 owl:someValuesFrom [:obo taxon] \.))

(defn with-NBO-term [gene term_name]
  (list
     :ice iao:denotes gene \.
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
   :term_name_field iao:denotes :term_name \.))

(defn participates-in-process [process ggpv-abstraction]
  (list  ;;## D ## restrict to those that are involved in oxidative phos \.
   ;;#look at all gene products of the abstraction
   :gp rdfs:subClassOf* ggpv-abstraction \.
   
   ;;#get processes they participate in
   :rparticipant owl:someValuesFrom :gp  \.
   :rparticipant owl:onProperty     [:obo :has_participant]  \.
   :things       rdfs:subClassOf    :rparticipant \.
   
   ;;#only look at those thing that are subClassOf ox phos
   :things rdfs:subClassOf* process  \.  ;#Oxadative phos 
   ))

(defn drug-that-targets [drug ggpv-abstraction]
  (list  ;;## E ## find the drugs that are known to target those genes
   
   ;;#look at all gene products in the abstraction
   :gpdrug rdfs:subClassOf* ggpv-abstraction \.
   
   ;;#get the processes they participate in
   :rparticipant2 owl:someValuesFrom :gpdrug \.
   :rparticipant2 owl:onProperty     [:obo :has_participant]  \. 
   
   ;;#look for interactions
   :interaction rdfs:subClassOf :rparticipant2 \.
   :interaction rdfs:subClassOf [:obo :MI_0407] \. ;# interaction
   
   ;;#get all the other participants
   :interaction rdfs:subClassOf :rdrugparticipant \.
   (filter :rparticipant2 != :rdrugparticipant)  \. ;# for effeciency
   :rdrugparticipant owl:onProperty     [:obo :has_participant]  \. 
   :rdrugparticipant owl:someValuesFrom drug  \.
()   
   ;;#verify other participant is playing a drug role in interaction
   :interaction rdfs:subClassOf :rx \.
   :rx owl:onProperty [:obo :realizes]  \. ))


(defn of-biological-process [subclass GO-biological-process]
  "subclasses of GO biological process in the OBO namespace"
  (subquery [subclass]
    (!# (str "subclasses of " GO-biological-process))
    subclass rdfs:subClassOf* GO-biological-process \. ;; #angiogenesis
    subclass oboMeta:hasOBONamespace :OBONamespace \.)) ;; #OBO ns (BPs))

(defn proteins-that-participates-in [protein-class subclass]
  "protein that participate in a subclass"
  (subquery [protein-class subclass]
   (!# "proteins that participate in a subclass")
   :anonSubclass rdfs:subClassOf subclass \.
   :anonSubclass rdfs:subClassOf :protRest \.

   :protRest rdf:type owl:Restriction \.
   :protRest owl:onProperty RO:has_participant \.
   :protRest owl:someValuesFrom :protSub \.

   :protSub rdfs:subClassOf protein-class \.
   protein-class rdfs:subClassOf* CHEBI:protein \.))

(defn denotes [ice bio]
  (list
   ice iao:denotes bio \.))

(defn swissprot-name [protein-id protein-name]
  "proteins that have swissprot ids and a name"
  (subquery [protein-id protein-name]
    (!# "proteins that have swissprot ids and a name")
    :idField iao:denotes protein-id \.
    :idField kiao:hasTemplate iaouniprot:UniProtFileRecord_primaryAccessionDataField1 \.
    :record BFO:hasPart :idField \.
    :record BFO:hasPart :nameField \.
    :nameField kiao:hasTemplate iaouniprot:UniProtFileRecord_nameDataField1 \.
    :nameField iao:denotes protein-name \. ;;# uniprot name
    ))

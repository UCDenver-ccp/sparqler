(ns sparqler.queries
   (:use sparqler.forms)
   (:use boutros.matsu.sparql)
   (:require [boutros.matsu.compiler :refer [encode]]
            [boutros.matsu.core :refer [register-namespaces]]
            [boutros.matsu.util]))


(defquery by-taxon 
  "Get genes for a taxon"
  [taxon]
  (select :gene)
  (where :taxon_r owl:onProperty RO:in_taxon \.
         :taxon_r owl:someValuesFrom [:obo taxon] \.
         :gene rdfs:subClassOf :taxon_r \.
         :gene rdfs:subClassOf gene)
  (limit 10))



(defquery participants 
  "get participants in a process"
  [process-id]
  (select process-id :process_id)
  (where- :specificbp rdfs:subClassOf process-id \.
          :specificbp rdfs:subClassOf :has_participant_r \.
          :has_participant_r owl:onProperty RO:has_participant \. ;# RO:has_participant
          :has_participant_r owl:someValuesFrom :specificbioentity \.
          :specificbioentity rdfs:subClassOf :participant_bio_entity \.
          :ice iao:denotes :participant_bio_entity)
  (group :participant_bio_entity))



(defquery cellular-components
  "Get cellular components"
  [src-id bio-id]
  (select [(raw src-id) :source-id] :cc :label)
  (where- :specificbioentity rdfs:subClassOf bio-id \.
          :localizes_r owl:onProperty RO:transports_or_maintains_localization_of \.
          :localizes_r owl:someValuesFrom :specificbioentity \.
          :localization rdfs:subClassOf :localizes_r \.
          :localization rdfs:subClassOf GO:localization \.
          :localization rdfs:subClassOf :location_r \.
          :location_r owl:onProperty RO:has_target_end_location \.
          :location_r owl:someValuesFrom :specificcc \.
          :specificcc rdfs:subClassOf :cc \.
          :cc rdfs:subClassOf* GO:cellular_component \. 
          :cc rdfs:label :label))

(defquery hasRole
  "Find role of URI"
  [uri]
  (select :role :svf)
  (where uri rdfs:subClassOf :restriction \.
         :restriction owl:someValuesFrom :svf \.
         :svf rdfs:label :role \.
         :restriction owl:onProperty RO:has_role))



(defquery localize 
  "localize doc"
  [name]
  (select :protein_name :location_class :location_name)
  (where :localization rdfs:subClassOf GO:localization \.
           :localization rdfs:subClassOf :of_restriction \.
           :of_restriction rdf:type owl:Restriction \. 
           :of_restriction owl:onProperty RO:transports_or_maintains_localization_of  \.
           :of_restriction owl:someValuesFrom :protein_subclass \.
           :protein_subclass rdfs:subClassOf :protein_class \.
           :protein_class rdfs:subClassOf CHEBI:protein \. 
           :protein_name iao:denotes :protein_class \. 
           :localization rdfs:subClassOf :to_restriction  \.
           :to_restriction rdf:type owl:Restriction \. 
           :to_restriction owl:onProperty RO:has_target_end_location \.
           :to_restriction owl:someValuesFrom :location_subclass \.
           :location_subclass rdfs:subClassOf :location_class \.
           :location_class rdfs:subClassOf* GO:cellular_component \.
           :location_class rdfs:label :location_name \.
           (filter :protein_name = name)))


(defquery interactions [bio-id]
  (select :interaction_label :partner_bio_id)
  (where  :specificbioentity rdfs:subClassOf bio-id \.
          :has_participant_r1 owl:someValuesFrom :specificbioentity \.
          :has_participant_r1 owl:onProperty RO:has_participant \. ;# RO:has_participant
          :interaction rdfs:subClassOf :has_participant_r1 \.

          ;# confirm has_participant cardinality
          :interaction rdfs:subClassOf :rcard \.
          :rcard owl:cardinality 2 \. ;# require 2 participants for a binary interaction
          :rcard owl:onProperty RO:has_participant \. ;# RO:has_participant
          
          :interaction rdfs:subClassOf* MI:interaction_type \. ;# MI:interaction_type
          :interaction rdfs:label :interaction_label \.
          
          :interaction rdfs:subClassOf :has_participant_r2 \.
          :has_participant_r2 owl:onProperty RO:has_participant \. ;# RO:has_participant
          :has_participant_r2 owl:someValuesFrom :interacting_partner \.
          :interacting_partner rdfs:subClassOf :partner_bio_id \.
          (filter :partner_bio_id != bio-id ) \.
          :partner_ice_id [:obo :IAO_0000219] :partner_bio_id \.
          ))


(defquery modular-localize [name]
  (select :location_class :location_name :protein_class :protein_name)
  (where+ (get-location :location_class :location_name) \.
          (of-protein :with-name name)))

(defquery modular-interactions [name]
  (select :interaction :interaction_name :partner_id )
  (where+ (get-interactions :protein_class :interaction_name :partner_id) \.
          (of-protein :with-name name)))

(defquery chebi-xref []
  (select [(count :x) :count])
  (where- :x rdfs:subClassOf CHEBI:chemical-entity))



(defquery annotation (n synonymType)
  (select :annotatedTarget)
  (where :o rdfs:label n \.
         :s :p :o \.
         :s rdf:type owl:Axiom \.
         ;:s oboinowl:hasDbXref :hasDbXref \.
         :s owl:annotatedTarget :annotatedTarget \.	
         :s oboinowl:hasSynonymType synonymType))

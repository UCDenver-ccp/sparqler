(ns sparqler.terms
   (:require [boutros.matsu.compiler :refer [encode]]
             [boutros.matsu.core :refer [register-namespaces]]
             [boutros.matsu.util])
   (:use boutros.matsu.sparql))

(register-namespaces {:obo     "<http://purl.obolibrary.org/obo/>"
                      :rdf     "<http://www.w3.org/1999/02/22-rdf-syntax-ns#>"
                      :rdfs    "<http://www.w3.org/2000/01/rdf-schema#>"
                      :owl     "<http://www.w3.org/2002/07/owl#>"
                      :bio     "<http://kabob.ucdenver.edu/bio/>"
                      :oboinowl "<http://www.geneontology.org/formats/oboInOwl#>"
                      :oboMeta "<http://www.geneontology.org/formats/oboInOwl#>"
                      :chebi   "<http://purl.obolibrary.org/obo/chebi#>"
                      :iaouniprot "<http://kabob.ucdenver.edu/iao/uniprot/>"
                      :kro     "<http://kabob.ucdenver.edu/ro/>"
                      :kso     "<http://kabob.ucdenver.edu/so/>"
                      :kbio    "<http://kabob.ucdenver.edu/bio/>"
                      :kiao    "<http://kabob.ucdenver.edu/iao/>"
                      :xsd     "<http://www.w3.org/2001/XMLSchema#>"
                      :eg      "<http://kabob.ucdenver.edu/iao/eg/>"
                      :iaonbo  "<http://kabob.ucdenver.edu/iao/nbo/>"
                      :iaohgnc "<http://kabob.ucdenver.edu/iao/hgnc/>"
                      :iaoreactome "<http://kabob.ucdenver.edu/iao/reactome/>"
                      :iaodrugbank "<http://kabob.ucdenver.edu/iao/drugbank/>"
                      :franz   "<http://franz.com>"
                      :franzOption_clauseReorderer "<franz:identity>"
                      :franzOption_chunkProcessingAllowed "<franz:yes>"
                      :franzOption_memoryLimit "<franz:60g>"
                      :franzOption_memoryExhaustionWarningPercentage "<franz:90.0>"
                      :franzOption_queryTimeout "<franz:300>" 
                      })

(def rdfs:label [:rdfs :label])
(def rdf:type [:rdf :type])
(def rdfs:subClassOf [:rdfs :subClassOf])
(def rdfs:subClassOf* [:rdfs :subClassOf*])

(def owl:onProperty [:owl :onProperty])
(def owl:someValuesFrom [:owl :someValuesFrom])
(def owl:Restriction [:owl :Restriction])
(def owl:cardinality [:owl :cardinality])
(def owl:Axiom [:owl :Axiom])
(def owl:annotatedTarget [:owl :annotatedTarget])

(def oboinowl:hasRelatedSynonym [:oboinowl :hasRelatedSynonym])
(def oboinowl:hasDbXref [:oboinowl :hasDbXref])
(def oboinowl:hasSynonymType [:oboinowl :hasSynonymType])

(def iao:denotes [:obo :IAO_0000219])
(def iao:defines [:obo :IAO_0000115])
(def iao:preferred_term [:obo :IAO_000111])

(def kiao:hasTemplate [:kiao :hasTemplate])

(def RO:in_taxon [:obo :RO_0002162])
(def RO:has_participant [:obo :RO_0000057])
(def RO:transports_or_maintains_localization_of [:obo :RO_0002313])
(def RO:has_target_end_location [:obo :RO_0002339])
(def RO:has_role [:obo :RO_0000087])
(def RO:homologous_to [:obo :RO_0002158])

(def MI:interaction_type [:obo :MI_0190])

(def BFO:hasPart [:obo :BFO_0000051])

(def gene [:obo :SO_0000704])

(def GO:localization [:obo :GO_0051179]) ; GO:0051179
(def GO:cellular_component [:obo :GO_0005575])
(def GO:mitochondria [:obo :GO_0005739])

(def CHEBI:protein [:obo :CHEBI_36080])
(def CHEBI:ltb4 [:obo :CHEBI_36080])
(def CHEBI:chemical-entity [:obo :CHEBI_24431])
(def CHEBI:InChI [:chebi :InChI])

(def Human :NCBITaxon_9606)
(def Mouse :NCBITaxon_10090)

(def obo:human [:obo Human])

(def iaouniprot:HUMAN_CYC
  "(def result (sparql/query kabob (localize [:iaouniprot :UNIPROT_P99999_ICE])))"
  [:iaouniprot :UNIPROT_P99999_ICE])



(def GO:oxidative-phosphorylation [:obo :GO_0006119])



(def oboMeta:hasOBONamespace [:oboMeta :hasOBONamespace])
(def iaouniprot:UniProtFileRecord_nameDataField1 [:iaouniprot :UniProtFileRecord_nameDataField1])
(def iaouniprot:UniProtFileRecord_primaryAccessionDataField1 [:iaouniprot :UniProtFileRecord_primaryAccessionDataField1])

(def GO:angiogenesis [:obo :GO_0001525])

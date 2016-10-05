

(in-ns 'sparqlr.core)

(defquery kabob1 []
  (select-distinct :drug :drugname)
  (where
   ;;## A ## localized to mitochondrion
   :mito rdfs:subClassOf* [:obo :GO_0005739] \. ;#mitochondrion

   :to1 rdf:type           owl:Restriction \.
   :to1  owl:someValuesFrom :mit
   \.
   :to1  owl:onProperty     [:kro :results_in_localization_to] \.
   
   :loc rdfs:subClassOf :to1 \.
   :Loc rdfs:subClassOf [:obo :GO_0051179] \. ;#localization
   :loc rdfs:subClassOf :of1 \.
   
   :of1 rdf:type           owl:Restriction \.
   :of1  owl:onProperty     [:kro :results_in_localization_of] \.
   :of1  owl:someValuesFrom :mitoGP \.
 
   ;;## B ## gene specific gene or gene product abstraction :gorgporv
   :mitoGP   rdfs:subClassOf* :gorgporv \.
   :gorgporv rdf:type         [:kbio :GeneSpecificGorGPorVClass]  \.
   
   ;;## C ## human only
   :gptaxon          rdfs:subClassOf*   :gorgporv \.
   :gptaxon          rdfs:subClassOf    :taxonrestriction  \.
   :taxonrestriction owl:onProperty     [:obo :RO_0002162]  \. ;#in_taxon
   :taxonrestriction owl:someValuesFrom [:obo :NCBITaxon_9606]  \. ;#human
   
   ;;## D ## restrict to those that are involved in oxidative phos \.
   ;;#look at all gene products of the abstraction
   :gpoxphos rdfs:subClassOf* :gorgporv \.
   
   ;;#get processes they participate in
   :rparticipant owl:someValuesFrom :gpoxphos  \.
   :rparticipant owl:onProperty     [:obo :has_participant]  \.
   :oxphos       rdfs:subClassOf    :rparticipant \.
   
   ;;#only look at those thing that are subClassOf ox \.phos \.
   :oxphos rdfs:subClassOf* [:obo :GO_0006119] \. ;#oxadative phos \.
   
   ;;## E ## find the drugs that are known to target those genes
   
   ;;#look at all gene products in the abstraction
   :gpdrug rdfs:subClassOf* :gorgporv \.
   
   ;;#get the processes they participate in
   :rparticipant2 owl:someValuesFrom :gpdrug \.
   :rparticipant2 owl:onProperty     [:obo :has_participant]  \. 
   
   ;;#look for interactions
   :interaction rdfs:subClassOf :rparticipant2 \.
   :interaction rdfs:subClassOf [:obo :MI_0000] \. ;# interaction
   
   ;;#get all the other participants
   :interaction rdfs:subClassOf :rdrugparticipant \.
   (filter :rparticipant2 != :rdrugparticipant)  \. ;# for effeciency
   :rdrugparticipant owl:onProperty     [:obo :has_participant]  \. 
   :rdrugparticipant owl:someValuesFrom :drug  \.
   
   ;;#verify other participant is playing a drug role in interaction
   :interaction rdfs:subClassOf :rx \.
   :rx owl:onProperty [:obo :realizes]  \. 
   
   :drug rdfs:label :drugname \. 
   ))



(defquery kabob1a []
  "Which genes/gene products in humans, are localized to mitochondria, involved in oxidative phosphorylation, and are targets of drugs? And what are these drugs?"
  (select-distinct :drug :drugname)
  (where+ (gene-or-gene-products :mitoGP :ggpv)
          (in-taxon Human :ggpv)
          (localized-to GO:mitochondria :mitoGP)
          (participates-in GO:oxidative-phosphorylation :ggpv)
          (drug-that-targets :drug :ggpv)
          (:drug rdfs:label :drugname)))

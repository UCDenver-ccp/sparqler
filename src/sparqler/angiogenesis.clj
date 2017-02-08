;; # VEGF - angiogenesis GOBP/subclasses, the proteins that participate in those GOBPs, and their protein-protein interactions

(require 'sparqler.core)

(defquery angiogenesis [] 

  (prefix "PREFIX franzOption_clauseReorderer: <franz:identity>
PREFIX FranzOption_chunkProcessingAllowed: <franz:yes> 
PREFIX franzOption_memoryLimit: <franz:60g> 
PREFIX franzOption_memoryExhaustionWarningPercentage: <franz:90.0> 
")
  
  (select-distinct :angioSubs :partProtId :intProtId)
  
  (where 
   
   (!# "select angiogenesis GOBPs and its subclasses that are in the OBO namespace")
   (of-biological-process :angioSubs GO:angiogenesis)
   
   (!# "restriction only want human proteins that participate in these GOBPs")
   (proteins-that-participates-in :protClass :angioSubs)
   
   (denotes :partProtID :protClass)
   
   (in-taxon obo:human :protClass)
   
   (!# "swisprot ids participating proteins")
   (swissprot-name :partProtId :partProtName)

   (!# "protein interactions")
   (with-interactions :protClass :intProtId)

   (!# "swisprot ids – participating-protein’s protein interaction partner names")
   (swissprot-name :intProtId :intProtName)
   ))



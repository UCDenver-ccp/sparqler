
(in-ns 'sparqler.core)


(defquery kevin []

;;   select ?eg_ice (group_concat(?term_name; separator = "|") AS ?nbo_term_names) {
  (select :eg_ice (group_concat :term_name "|" :nbo_term_names))

  
  (where+

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
   :eg_ice iao:denotes :gene \.
   (in-taxon Human :gene)
   (with-homolog :gene :homologous_mouse_gene Mouse)
   (with-NBO-term :homologous_mouse_gene :term_name)
   )
  (group-by :eg_ice)
  )
  

               

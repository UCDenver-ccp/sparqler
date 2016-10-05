(defproject sparqlr "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [clj-sparql "0.2.0"]
                 [aysylu/loom "0.6.0"]
                 [loom-gorilla "0.1.0"]
	         [ubergraph "0.2.2"]
                 [chemaxon/jchem "1.0"]
		 [incanter-gorilla "0.1.0"]
                 [org.clojure/data.xml "0.0.8"]
		 [cascalog/cascalog-core "3.0.0"]
                 ]
  :plugins [[lein-gorilla "0.3.6"] [lein-localrepo "0.5.3"]]
  :resource-paths ["/Applications/ChemAxon/JChem/lib/"]
  :main ^:skip-aot sparqlr.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all} :dev {:dependencies [[org.apache.hadoop/hadoop-core "1.2.1"]]}}
  :jvm-opts ["-Xms768m" "-Xmx768m"])

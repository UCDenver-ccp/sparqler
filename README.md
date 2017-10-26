# SPARQLER
Tools for creating and running SPARQL queries

## Table of Contents
- [Introduction:](#Introduction)

<a name="Introduction"/>

## Introduction
This package was created with the intent of making it easier to query the Knowledge Base of Biomedicine (KaBOB). 

## Functions/Methods

### sparqler.core

- kabob:
	-endpoint
	-user
	-pass

- local
	-endpoint

- GO

- kabob-query

- local-query

- go:?

- po

- sp

- define

- synonym

- xref

- label

- labeOf

- labell

- kabob-label

- kabob-define

- kabob-po

- kabob-synonym

- kabob-xref

- webview

- webview-query

- webchebi

- webview-key

- predicate

- PROTEIN

- ENZYME

- REACTION

- MOLECULE

- GENE

- where+

- group-concat

- inchi

- ->URI

## Other Tools used
-[Leiningen][leiningen link]

-[Cursive][cursive link] (plugin for IntelliJ)

-[BeakerX][beakerx link]

-[SPARQL kernel][sparqlkernel link]

## Jupyter Notebooks

In order to use and view the included Jupyter notebookes (located under "/src/") please install the following kernel plugins for Jupyter. 

-[BeakerX][beakerx link]

-[SPARQL kernel][sparqlkernel link]

Then, make sure that you are switching the the correct kernel for each cell by going to Kernel -> Change kernel.

Before running any clojure code from sparqler, run a cell containing the following:

    %classpath add mvn joda-time joda-time 2.9.9
    %classpath add mvn clj-sparql clj-sparql 0.2.0
    %classpath add jar .
    (load-file "boutros/matsu/compiler.clj")
    (require 'sparqler.core)
    (require 'sparqler.queries)
    
This configures the classpath and loads the necessary clojure code into the kernel.

[leiningen link]:https://leiningen.org/
[cursive link]:https://cursive-ide.com/
[beakerx link]:http://beakerx.com/documentation
[sparqlkernel link]:https://github.com/paulovn/sparql-kernel

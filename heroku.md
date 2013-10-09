#Heroku

##Overview
Heroku lets you deploy, run and manage applications written in Ruby, Node.js, Java, Python, Clojure and Scala.

You need to employ a buildpack if you want to use another lanauges.

##Applications
Applications consist of your source code, a description of any dependencies, and a Procfile.

Dependency mechanisms vary across languages, so they are specific to Ruby, Scala, Node.js, etc

##Knowing what to execute
One requirement is informing the platform as to which parts of your application are runnable.

If you’re using some established framework, Heroku can figure it out. 

For other applications, you may need to explicitly declare what can be executed in a Procfile, which lists process types - i.e. named commands that you may want executed.


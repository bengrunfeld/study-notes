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

##Deploying to Heroku
Deploying code is just the familiar git push, but to the heroku remote instead:

	git push heroku master

##Building Applications
When the Heroku platform receives a git push, it initiates a build of the source application, and assembles a **Slug**

##Slugs
A slug is a bundle of your source, fetched dependencies, the language runtime, and compiled/generated output of the build system - ready for execution.

##Running Applications
Heroku executes applications by running a command you specified in the Procfile, on a dyno that’s been preloaded with your prepared slug.

##What is a Dyno
A running **Dyno** is a lightweight, secure, virtualized Unix container that contains your application slug in its file system.

OR... 

**Dynos** are isolated, virtualized Unix containers, that provide the environment required to run an application.

##Scaling a Dyno
You have control over how many dynos are running at any given time. 

The number of Dynos running can be configured in the Procfile, or you can change the number manually via the command line. E.g.

	heroku ps:scale web=3 queuty=2
	
##What is a Dyno Formation
A Dyno Formation is is the total number of currently executing dynos, divided between the various process types you have scaled for your application.

##How to check what dynos are running which process types:

	heroku ps

##Config Vars
An application’s configuration is everything that is likely to vary between environments (staging, production, developer environments, etc.). This includes backing services such as databases, credentials, or environment variables that provide some specific information to your application.

**Config vars** are created and edited via the command line. E.g.

	heroku config:add ENCRYPTION_KEY= my_secret_launch_codes

**Config vars** contain customizable configuration data that can be changed independently of your source code. The configuration is exposed to a running application via environment variables.

At runtime, all of the config vars are exposed as environment variables - so they can be easily extracted programatically.

An application can access a config var by calling it. E.g.

	ENV["ENCRYPTION_KEY"]


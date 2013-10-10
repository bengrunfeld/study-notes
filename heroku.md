#Heroku

##URLS of Pages Studied
* https://devcenter.heroku.com/articles/quickstart
* https://devcenter.heroku.com/articles/getting-started-with-ruby
* https://devcenter.heroku.com/articles/how-heroku-works

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

	$ git push heroku master

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

	$ heroku ps:scale web=3 queuty=2
	
##What is a Dyno Formation
A Dyno Formation is is the total number of currently executing dynos, divided between the various process types you have scaled for your application.

##How to check what dynos are running which process types:

	$ heroku ps

##Config Vars
An application’s configuration is everything that is likely to vary between environments (staging, production, developer environments, etc.). This includes backing services such as databases, credentials, or environment variables that provide some specific information to your application.

**Config vars** are created and edited via the command line. E.g.

	$ heroku config:add ENCRYPTION_KEY= my_secret_launch_codes

**Config vars** contain customizable configuration data that can be changed independently of your source code. The configuration is exposed to a running application via environment variables.

At runtime, all of the config vars are exposed as environment variables - so they can be easily extracted programatically.

An application can access a config var by calling it. E.g.

	$ ENV["ENCRYPTION_KEY"]

##Releases
To run your application, the Heroku platform loads a dyno (or set of dynos) with your most recent slug and any config variables you have assigned to the application. The combination of slug and configuration is called a **Release**.

Releases are an append-only ledger of slugs, config vars, and any add-ons you may have incorporated.

To see the audit trail of release deploys:

	$ heroku releases
	== demoapp Releases
	v103 Deploy 582fc95  jon@heroku.com   2013/01/31 12:15:35
	v102 Deploy 990d916  jon@heroku.com   2013/01/31 12:01:12

The number next to the deploy message, for example `582fc95`, corresponds to the commit hash of the repository you deployed to Heroku.

Every time you deploy a new version of an application, a new slug is created and release is generated.

As Heroku contains a store of the previous releases of your application, it’s very easy to rollback and deploy a previous release:

	$ heroku releases:rollback v102
	Rolling back demoapp... done, v102
	$ heroku releases
	== demoapp Releases
	v104 Rollback to v102 jon@heroku.com   2013/01/31 14:11:33 (~15s ago)
	v103 Deploy 582fc95   jon@heroku.com   2013/01/31 12:15:35
	v102 Deploy 990d916   jon@heroku.com   2013/01/31 12:01:12

Making a material change to your application, whether it’s changing the source or configuration, results in a new release being created.

##The Dyno Manager
The dyno manager of the Heroku platform is responsible for managing dynos across all applications running on Heroku.

This dyno cycling happens transparently and automatically on a regular basis, and is logged.

Applications with only a single web dyno sleep after one hour of inactivity. When a sleeping application receives HTTP traffic, it will be awakened - causing a delay of a few seconds. Scaling the web dynos will avoid sleeping.

Because Heroku manages and runs applications, there’s no need to manage operating systems or other internal system configuration.

##One-off Dynos
One-off Dynos are temporary dynos that can run with their input/output attached to your local terminal, allowing you to perform tasks like changing configurations, shared resources, etc. They’re loaded with your latest release.

Here’s the simplest way to create and attach to a one-off dyno:

	$ heroku run bash
	Running `bash` attached to terminal... up, run.8963
	~ $ ls

This will spin up a new dyno, loaded with your release, and then run the bash command - which will provide you with a unix shell. Once you’ve terminated your session, or after a period of inactivty, the dyno will be removed.

Changes to the filesystem on one dyno are not propagated to other dynos and are not persisted across deploys and dyno restarts.

Each dyno gets its own ephemeral filesystem - with a fresh copy of the most recent release. It can be used as temporary scratchpad, but changes to the filesystem are not reflected to other dynos.

All dynos, even those in the same application, are isolated - and after the session is terminated the dyno will be killed. New dynos are always created from a slug, not from the state of other dynos.

##Add Ons
Applications typically make use of add-ons to provide backing services such as databases, queueing & caching systems, storage, email services and more. E.g.

	$ heroku addons:add redistogo:nano

The add-on service provider is responsible for the service - and the interface to your application is often provided through a config var.

Add-ons are also included in the technical description of a **Release**.

Much like config vars, whenever you add, remove or change an add-on, a new release is created.

##Logging and monitoring
Heroku treats logs as streams of time-ordered events, and collates the stream of logs produced from all of the processes running in all dynos, and the Heroku platform components, into the **Logplex** - a high-performance, real-time system for log delivery. E.g.

	$ heroku logs
	2013-02-11T15:19:10+00:00 heroku[router]: at=info method=GET path=/articles/custom-domains host=mydemoapp.heroku.com fwd=74.58.173.188 dyno=web.1 queue=0 wait=0ms connect=0ms service=1452ms status=200 bytes=5783
	2013-02-11T15:19:10+00:00 app[web.2]: Started GET "/" for 1.169.38.175 at 2013-02-11 15:19:10 +0000
	2013-02-11T15:19:10+00:00 app[web.1]: Started GET "/" for 2.161.132.15 at 2013-02-11 15:20:10 +0000

Here you see 3 timestamped log entries, the first from Heroku’s router, the last two from two dynos running the web process type.

**Logplex** automatically collates log entries from all the running dynos of your app, as well as other components such as the routers, providing a single source of activity.

You can also dive into the logs from just a single dyno, and keep the channel open, listening for further events: E.g.

	$ heroku logs --ps web.1 --tail
	2013-02-11T15:19:10+00:00 app[web.2]: Started GET "/" for 1.169.38.175 at 2013-02-11 15:19:10 +0000


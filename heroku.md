#Heroku

##URLS of Pages Studied
* https://devcenter.heroku.com/articles/quickstart
* https://devcenter.heroku.com/articles/getting-started-with-ruby
* https://devcenter.heroku.com/articles/how-heroku-works
* https://devcenter.heroku.com/articles/procfile
* https://devcenter.heroku.com/articles/config-vars
* https://devcenter.heroku.com/articles/architecting-apps
* https://devcenter.heroku.com/articles/slug-compiler
* https://devcenter.heroku.com/categories/command-line
* https://devcenter.heroku.com/articles/one-off-dynos
* https://devcenter.heroku.com/articles/dynos
* https://devcenter.heroku.com/articles/getting-started-with-django

##Overview
Heroku lets you deploy, run and manage applications written in Ruby, Node.js, Java, Python, Clojure and Scala.

You need to employ a buildpack if you want to use other lanauges.

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

##HTTP Routing
Some of your dynos will be running the command associated with the `web` process type, and some will be running other commands associated with other process types.

The dynos that run process types named `web` are different in one way from all other dynos - they will receive HTTP traffic. Heroku’s HTTP routers distributes incoming requests for your application across your running web dynos.

So scaling an app’s capacity to handle web traffic involves scaling the number of web dynos:

	$ heroku ps:scale web+5

A random selection algorithm is used for HTTP request load balancing across web dynos - and this routing handles both HTTP and HTTPS traffic.

#The Procfile
A Procfile is a mechanism for declaring what commands are run by your application’s dynos on the Heroku platform.

You can use a Procfile to declare various process types, such as multiple types of workers, a singleton process like a clock, or a consumer of the Twitter streaming API.

A Procfile is a text file named Procfile placed in the root of your application, that lists the process types in an application. Each process type is a declaration of a command that is executed when a dyno of that process type is started. E.g.

	web: lein run -m demo.web $PORT

You can reference other environment variables populated by Heroku, most usefully the $PORT variable, in the command.

##Declaring process types
Process types are declared via a file named Procfile placed in the root of your app. Its format is one process type per line, with each line containing:

	<process type>: <command>

The syntax is defined as:

`<process type>` – an alphanumeric string, is a name for your command, such as web, worker, urgentworker, clock, etc.

`<command>` – a command line to launch the process, such as `rake jobs:work`.

##Developing locally with Foreman
Foreman is a command-line tool for running Procfile-backed apps. It’s installed automatically by the Heroku Toolbelt.

If you had a Procfile with both web and worker process types, Foreman will start one of each process type, with the output interleaved on your terminal:
Run your app locally with Foreman:

	$ foreman start
	18:06:23 web.1     | started with pid 47219
	18:06:23 worker.1  | started with pid 47220

Your web process loads on port 5000 because this is what Foreman provides as a default in the $PORT env var. It’s important that your web process respect this value, since it’s used by the Heroku platform when you deploy.

##Setting local environment variables
Config vars saved in the `.env` file of a project directory will be added to the environment when run by Foreman. For example we can set the `RACK_ENV` to development in your environment.

	echo "RACK_ENV=development" >>.env
	$ foreman run irb
	> puts ENV["RACK_ENV"]
	> development

Do not commit the .env file to source control–it should only be used for local configuration.

##Deploying to Heroku
A Procfile is not necessary to deploy apps written in most languages supported by Heroku. The platform automatically detects the language, and creates a default web process type to boot the application server.

Creating an explicit Procfile is recommended for greater control and flexibility over your app.
For Heroku to use your Procfile, add the Procfile to the root of your application, then push to Heroku:

##Scaling a process type

Heroku runs one web dyno for you automatically, but other process types don’t start by default. To launch a worker, you need to scale it up to one dyno:

	$ heroku ps:scale worker=1
	Scaling worker processes... done, now running 1

You can also scale the size of a dyno:

	$ heroku ps:resize worker=2X
	Resizing dynos and restarting specified processes... done
	worker dynos now 2X ($0.10/dyno-hour)
	
Use `heroku ps` to see if the new process is running.

Use `heroku logs --ps worker` to view just the messages from the worker process type.

#Configuration and Config Vars
On a traditional host or working locally you can set environment vars in your `bashrc`. On Heroku, you use config vars.

##Setting up config vars for a deployed application
Use the Heroku CLI’s `config`, `config:set`, `config:get` and `config:unset` to manage your config vars:

	$ heroku config:set GITHUB_USERNAME=joesmith
	Adding config vars and restarting myapp... done, v12
	GITHUB_USERNAME: joesmith
	
	$ heroku config
	GITHUB_USERNAME: joesmith
	OTHER_VAR:       production
	
	$ heroku config:get GITHUB_USERNAME
	joesmith
	
	$ heroku config:unset GITHUB_USERNAME
	Unsetting GITHUB_USERNAME and restarting myapp... done, v13

Heroku manifests these config vars as environment variables to the application. These environment variables are persistent – they will remain in place across deploys and app restarts.

Whenever you set or remove a config var, your app will be restarted. Config var data (the collection of all keys and values) is limited to 16kb for each app.

##Using Foreman and heroku-config
`heroku-config` is a plugin for the Heroku CLI that makes it easy to grab your application’s config vars, and place them in your local .env, and vice versa.

Learn more about it at: 
[https://devcenter.heroku.com/articles/config-vars#using-foreman-and-heroku-config](https://devcenter.heroku.com/articles/config-vars#using-foreman-and-heroku-config)

##Other local options
A less useful alternative to using Foreman’s .env file is to set these values in the ~/.bashrc for the user:

	export S3_KEY=mykey
	export S3_SECRET=mysecret

Or, specify them when running the application (or any other command) by prepending the shell command:

	$ S3_KEY=mykey S3_SECRET=mysecret application

##Production and development modes
Many languages and frameworks support a development mode. This typically enables more debugging, as well as dynamic reloading or recompilation of changed source files.

For example, in a Ruby environment you could set a `RACK_ENV` config var to `development` to enable such a mode. Etc with other languages.

##Architecting Applications for Heroku
The [Twelve Factor](12factor.net) app, written by Heroku co-founder Adam Wiggins, is a methodology for building software-as-a-service apps in modern deployment environments.

#Slugs - In Depth
Slugs are compressed and pre-packaged copies of your application optimized for distribution to the dyno manager. When you git push to Heroku, your code is received by the slug compiler which transforms your repository into a slug. Scaling an application then downloads and expands the slug to a dyno for execution.

Slug compilation is currently limited to 15 minutes.

Very large applications which time out should usually have independent components spun off into separate libraries.

##Ignoring files with .slugignore
If your repository contains files not necessary to run your app, you may wish to add these to a .slugignore file in the root of your repository. Examples of files you may wish to exclude from the slug:

* Unit tests or specs
* Art sources (like .psd files)
* Design documents (like .pdf files)
* Test data

E.g.

	*.psd
	*.pdf
	/test
	/spec

The `.slugignore` file causes files to be removed after you push code to Heroku and before the buildpack runs. Unlike .gitignore, `.slugignore` does not support negated `!` patterns.

##Slug size
Your slug size is displayed at the end of a successful compile. The maximum allowed slug size (after compression) is 300MB.

You can inspect the extracted contents of your slug with `heroku run bash` and by using commands such as `ls` and `du`.

#One-off Dyno's – In Depth
One-off dynos can make full use of anything deployed in the application.

There are four differences between one-off dynos (run with `heroku run`) and formation dynos (run with `heroku ps:scale`):

* One-off dynos run attached to your terminal, with a character-by-character TCP connection for `STDIN` and `STDOUT`. This allows you to use interactive processes like a console. Since `STDOUT` is going to your terminal, the only thing recorded in the app’s logs is the startup and shutdown of the dyno.
* One-off dynos terminate as soon as you press Ctrl-C or otherwise disconnect in your local terminal. One-off dynos never automatically restart, whether the process ends on its own or whether you manually disconnect.
* One-off dynos are named in the scheme `run.N` rather than the scheme `<process-type>.N`.
* One-off dynos can never receive HTTP traffic, since the routers only routes traffic to dynos named `web.N`.

Other than these differences, the dyno manager makes no distinction between one-off dynos and formation dynos.

Because each dyno is populated with its own copy of the slug-archive, files you delete in the one-off dyno won’t change your running application.

##Types of one-off dynos
Some types of one-off dynos include:

* Initialising databases or running database migrations. (e.g. `rake db:migrate` or `node migrate.js migrate`)
* Running a console (also known as a REPL shell) to run arbitrary code or inspect the app’s models against the live database. (e.g. `rails console`, `irb`, or `node`)
* One-time scripts committed into the app’s repo (e.g. `ruby scripts/fix_bad_records.rb` or `node tally_results.js`).

##Running tasks in background
You can run a dyno in the background using `heroku run:detached`. Unlike `heroku run`, these dynos will send their output to your logs instead of your console window. You can use `heroku logs` to view the output from these commands: E.g.

	$ heroku run:detached rake db:migrate

#More About Dynos

##Stopping running Dynos
You can check your current running dynos using `heroku ps`:

If you wish to stop a running dyno, use `heroku ps:stop` with its name. E.g.

	$ heroku ps:stop run.1

##SSH access
Since your app is spread across many dynos by the dyno manager, there is no single place to SSH into. You deploy and manage apps, not servers. You need to use the Heroku CLI. You can't use SSH.

##Watching changes in real-time
The dyno manager restarts all your app’s dynos whenever you create a new release by deploying new code, changing your config vars, changing your add-ons, or when you run `heroku restart`.

You can watch Dyno restarts happen in realtime using the Unix watch command: run `watch heroku ps` in one terminal while pushing code or changing a config var in another.

Dynos are also restarted if the processes running in the dyno exit. 

##Dyno crash restart policy
If a dyno crashes during boot, Heroku will immediately attempt to restart it again. If a dyno crashes during subsequent attempts, Heroku will continue to attempt to restart it again, but the attempts will be spaced apart by increasing intervals.

##Dyno Startup
During startup, the container starts a bash shell that runs any code in `$HOME/.profile` before executing the dyno’s command. You can put bash code in this file to manipulate the initial environment, at runtime, for all dyno types in your app.

##Local environment variables
The Dyno Manager sets up a number of default environment variables that you can access in your application.

If the dyno is a web dyno, the `$PORT` variable will be set. The dyno must bind to this port number to receive incoming requests.

The `$DYNO` variable is experimental and subject to change or removal.

The `$DYNO` variable will be set to the dyno identifier. e.g. `web.1`, `worker.2`, `run.9157`.

##Processes
After the `.profile` script is executed, the dyno executes the command associated with the process type of the dyno. For example, if the dyno is a `web` dyno, then the command in the Procfile associated with the web process type will be executed.

No more than 256 created processes/threads can exist at any one time in a dyno - whether they’re executing, sleeping or in any other state.

##Web dynos
A web dyno must bind to its assigned $PORT within 60 seconds of startup. Processes can bind to other ports before and after binding to `$PORT`.

##Graceful shutdown with SIGTERM
When the dyno manager restarts a dyno, the dyno manager will request that your processes shut down gracefully by sending them `SIGTERM`. This signal is sent to all processes in the dyno, not just the process type.

##Redundancy
Applications with multiple running dynos will be more redundant against failure. If some dynos are lost, the application can continue to process requests while the missing dynos are replaced. Typically, lost dynos restart promptly, but in the case of a catastrophic failure, it can take more time. Multiple dynos are also more likely to run on different physical infrastructure (for example, separate AWS Availability Zones), further increasing redundancy.

##Isolation and security
Dynos execute in complete isolation from one another, even when on the same physical infrastructure. This includes both dynos in the dyno formation and dynos run as one-off dynos with heroku run. This provides protection from other application processes and system-level processes consuming all available resources.

##Ephemeral filesystem
Each dyno gets its own ephemeral filesystem, with a fresh copy of the most recently deployed code. During the dyno’s lifetime its running processes can use the filesystem as a temporary scratchpad, but no files that are written are visible to processes in any other dyno and any files written will be discarded the moment the dyno is stopped or restarted.

##IP addresses
When running multiple dynos, apps are distributed across several nodes by the dyno manager. Access to your app always goes through the routers. As a result, **dynos don’t have static IP addresses**.

##Network interfaces
The dyno manager allocates each dyno a separate network interface. Dynos are only reachable from outside Heroku via the routers at their assigned $PORT. Individual processes within a dyno can bind to any address or port they want and communicate among them using e.g. standard TCP.

##Connecting to external services
Applications running on dynos can connect to external services. 

#The Celadon Cedar Stack
Celadon Cedar is Heroku’s default runtime stack and is a flexible, polyglot environment with robust introspection and erosion-resistance capabilities. It embodies modern principles of building, deploying and managing web applications and is recommended for all apps.

To create an app on the Cedar stack use the `heroku create` command from the Heroku command line:

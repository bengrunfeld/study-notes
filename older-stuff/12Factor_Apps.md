*Source: [http://12factor.net/](http://12factor.net/)*

#### I. Codebase
*One codebase tracked in revision control, many deploys*

A twelve-factor app uses a version control system to track that app's code. 

A `codebase` is a single repo, or a set of repo's that share a root commit.

There is a 1-to-1 correlation between the `codebase` and the app, meaning you can only have 1 `codebase` per app.

A `deploy` is a running instance of the app. Examples of `deploys` are a production site, a staging site, and local running instances of the app.

A twelve-factor app can have many `deploys`.


#### II. Dependencies
*Explicitly declare and isolate dependencies*

A twelve-factor app never relies on packages to already be installed on a system. All dependencies are declared in a `dependency declaration manifest`. A `dependency isolation tool` is also used during execution to make sure that no implicit dependencies “leak in” from the surrounding system. 

For example, in Python, `Pip` is used for declaration and `Virtualenv` for isolation.

Twelve-factor apps also do not rely system tools (e.g. `curl`) existing on a particular system. If the app needs to shell out to a system tool, that tool should be vendored into the app.

#### III. Config
*Store config in the environment*

The `config` of an app is everything that might vary between deploys (e.g. production, staging, local deployments, etc). These include database hostnames & login credentials, logins to services like Amazon S3 or the Facebook API, etc.

It is a violation of the twelve-factor methodology to store `config` in the code. Code does not vary across `deploys`, but `config` does.

According to the twelve-factor app methodology, `config` should be stored as `environment variables` (aka `env vars`).

You should not group `env var` naming together, like `DEV_DB_LOGIN`, and **definitely** not `BENS_DEV_DB_LOGIN`! Rather it should be `LOGIN_NAME` or some such. This ensures that the app scales nicely with multiple deploys.

#### IV. Backing Services
*Treat backing services as attached resources*

"A backing service is any service the app consumes over the network as part of its normal operation." (e.g. databases, queueing or message systems, SMTP services and caching systems.)

Twelve-factor apps make no distinction between local and 3rd-party services.

As far as the app is concerned, local and 3rd-party services are both seen as **attached resources**, which can be accessed via a URL or other locator/credentials which are stored in the `config`.

For example, a twelve-factor app deploy should be able to exchange a local Sqlite3 database with one managed by a third party (e.g. Amazon RDS) without any changes to the app’s code.


#### V. Build, release, run
*Strictly separate build and run stages*

There are 3 stages involved in turning a `codebase` into a non-development deploy:

1. **BUILD** – the code in a repo is converted into an executable bundle which is called a `build`. During the `build` stage, vendor depenencies are fetched and binaries and assets are compiled. 

2. **RELEASE** – the completed build is combined with the depoly's config. The result is called a `release` and is ready for execution in the target environment.

3. **RUN** (aka *runtime*) – the apps processes are launched against a selected release, and the app is thus run in the execution environment.

Twelve-factor apps strictly separate the `build`, `release`, and `run` stages. (e.g. you can't make changes to the code at runtime).

`Releases` should always have a unique release ID, e.g. a versioning number such as `v.0.1.5`, a timestamp, etc.


#### VI. Processes
*Execute the app as one or more stateless processes*

The app is executed in the execution environment as one or more `processes`.

Comlpexity can range from a single script deployed on a local environment to a production deploy of a complex app utilizing multiple process types, instantiated into zero or more running `processes`.

"Twelve-factor processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database."

A twelve-factor app never assumes that anything cached in memory or on disk will be available for a future request or job.


#### VII. Port binding
*Export services via port binding*

Most of the time, Web apps are executed inside of webserver containers. (e.g. Java inside of Tomcat)

A twelve-factor app is completely self-contained and do not inject a webserver into the execution environment during runtime as a means of creating a web-facing service.

HTTP is exported as a service by the web app by binding it to a port and listening to requests being sent to that port.

A routing layer handles routing requests from a public-facing hostname to the port-bound web processes in deployment.

Usually, a websever library is added to the app via dependency declaration. (e.g. Tornado for Python). This occurs exclusively inside the app's code.

"The contract with the execution environment is binding to a port to serve requests."

#### VIII. Concurrency
*Scale out via the process model*

"Any computer program, once run, is represented by one or more processes."

Web apps can represent themselves in a wide spectrum of process-execution forms.

According to the twelve-factor app methodology, processes are a first class citizen, and generally follow the Unix process model for running service daemons. 

According to this model, the developer architechs their app to deal with diverse workloads by assigning a process type to each type of work.

(e.g. HTTP requests may be dealt with by a web process, while long-running background tasks might be dealt with by a worker process.)

As your app needs to scale out, the process model really shows its worth. 

"The share-nothing, horizontally partitionable nature of twelve-factor app processes means that adding more concurrency is a simple and reliable operation." 

A **Process Formation** is an array of process types and the number of processes of each type.

"Twelve-factor app processes should never daemonize or write PID files." 

The OS's process manager (e.g. Foreman for local development) should be relied on instead to manage output streams, respond to crashed processes, and handle user-initiated restarts and shutdowns.

#### IX. Disposability
*Maximize robustness with fast startup and graceful shutdown*

"Twelve-factor app’s processes are disposable, meaning they can be started or stopped nearly instantly."

Some of the benefits of this are rapid deployment, robustness of production deploys, and fast elastic scaling.

The twelve-factor methodology advocates processes taking the shortest amount of time possible to start up (ideally only a few seconds).

This makes the release process more agile and means that it scales up more easily and is more robust in general.

Similarly, processes should shut down gracefully when they receive a SIGTERM signal.

A web process achieves this by stopping to listen on the service port, thus refusing any new requests, while allowing any current requests to finish, and finally exiting.

HTTP requests should be short - no more than a few seconds.

Robustness against 'sudden death' should also be built into the process. Sudden death would generally occur if the hardware being used suffered a critical failure.

The twelve-factor manifesto recommends using a robust queueing backend like Beanstalkd which deals with issues like sudden death.

"Crash-only design takes this concept to its logical conclusion."


#### X. Dev/prod parity
*Keep development, staging, and production as similar as possible*

Twelve-factor app's are designed for **continuous deployment** by keeping the gap between development and production small.

This means:

* deploying code that has just been written as quickly as possible
* code developers be closely involved in the app's deployment and observe its behavior in production
* development and production be as similar as possible

Backing services (e.g. database, queueing system, cache, etc) should be in one area where so that development/production parity is made easier. 

See note on Language-based Adapters – [link](http://12factor.net/dev-prod-parity)

The backing services used in development should be the same backing services used during production (e.g. dev: sqlite3, prod: postresql = BAD!)


#### XI. Logs
*Treat logs as event streams*

"Logs provide visibility into the behavior of a running app... Logs are the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services."

Twelve-factor apps should never directly perform the routing or storage of its output stream (e.g. writing logfiles). 

Rather, a running process should write its event stream unbuffered to `stdout`.

When developing locally, the programmer can view this stream in their terminal.

Regarding staging and production, the output stream should be captured by the execution environment and collated with other streams from the app, then routed to some other final destination.

The final destination should not visible to the app or configurable by it. Instead, it should be managed by the execution environment. 

[View main article](http://12factor.net/logs) for open-source log routers (e.g. Logplex & Fluent)

#### XII. Admin processes
*Run admin/management tasks as one-off processes*

Sometimes, a developer will want to perform a one-off task, such as running a database migration. (e.g. manage.py syncdb – Django).

"One-off admin processes should be run in an identical environment as the regular long-running processes of the app. They run against a release, using the same code and config as any process run against that release. Admin code must ship with application code to avoid synchronization issues."


All process types should use the same dependency isolation techniques.

Best practice in twelve-factor apps is to use a language which offers a REPL shell (e.g. the interpreter in Python). These make it easy to run one-off scripts.

If a developer is working locally, they can simply run one-off admin scripts by using a direct shell command, although in production, developers should use SSH or the apps execution environment (e.g. one-off Dyno's in Heroku).
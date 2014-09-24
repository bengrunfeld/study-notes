# Large-scale Javascript Apps

#### Rules of modularized code

1. Modules are decoupled from each other. The test of this is: if you pull your module out of the app, nothing else breaks. Only the functionality of the module goes away.

2. Modules should ask, but never take. Expect that you may not get an answer.

3. Don't pollute the global scope

#### Application Hub

To organize the communication between modules, you need an application hub. It should take care of 4 main things:

1. Start-up of app
2. Eventing taking place
3. Module lifecycles
4. Placement of views

##### Startup

Any bootstrapping that is needed, loading of Async modules, global set up, config values, start backbone history api.

##### Eventing

Do we have permission to do something. Communication mediators, through which modules communicate with each other with subscribe and publish.

##### Module Lifecycles

When is it safe for a module to start. When is it safe for a module to stop. 

##### Placement of views

Something needs to decide when modules have their views on the screen, when do they need to be removed, etc.

#### Marionette

Marionette is a library, a set of extensions to Backbone that allow us to build our app in a composite and event-driven way.

Marionette helps you reduce boilerplate code.

#### Backbone Reqr

Handles 3 main things:

* Event aggregator - e.g `on` 
* Requests - request that somethign gets returned to you
* Commands - not interested in something being returned, just execute the command

The reason to use this instead of simple events and and functions is that you give semanting meaning to what you're doing.


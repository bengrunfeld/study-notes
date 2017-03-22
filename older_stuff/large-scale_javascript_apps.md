# Large-scale Javascript Apps

### New Zealand Video

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

### Brian Mann

Large-Scale Javascript Applications (LSJA)

#### Charecteristics of LSJA

* Multiple routers
  * Need to be able to rebuild UI from routing URL 
* View Management
  * Nesting
  * Cleanup - no memory leaks
* Communication between modules
  * Complex Events
  * Lots of state changes
* Many Entities (models, collections)

This equals = A TON of JS Files

Building architecture is about good Javascript patters.

#### Specialized Objects

* Application
  * App Modules
    * Router
    * Controllers
      * Specialized Views
  * Components
  * Mixins - code that you want mixed in to your views
  * Entities
  * Config

* Modules
* Messaging Bus
  * Request
  * Command
  * Pub/Sub

#### Controllers

Most code written here.  Says where everything goes.

* Create new views
* Understands view dependencies
* Listens and responds to view events
* Request additional components/services
* Place view onto page

We take all those things out of the View that never should have been there.

#### Views

The view just has to manage the template/DOM.

Views are transient. 

Methods are a place to store view related behavior in its lifecycle. 

**Never instantiate an entity in a view.**

An **Item View** is typically paired with a **Model**. Has one things passed in, not much special behavior

A **Collection View** is given a **Collection** iterates on all the models in that collection, instaniating other **item views**.

A **Layout** is a set of regions which the views can populate. Deleteing one region up the page will cause a cascade of changes all down through the document. This is how you could automate cleanup, etc

The view is listening to events that are coming off the DOM. The controller then needs to listen to the view and react.











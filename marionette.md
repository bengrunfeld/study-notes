# Marionette

#### Application

The application object allows you to:

* **initialize** the app
* use **application events** on setup
* communicate between modules using the **application channel**
* use the **Event Aggregator** to pass info between pieces of your app
* requests info from another component without being tightly coupled using **request response**
* perform an action in another module without directly referring to it with **commands** 
* add **regions** which allow you to attach views to the DOM

#### AppRouter

Allows you to specify routes - connected to a controller

#### Behavior

Behaviors allow you to set events and functions that are specifically intended to be used for user interaction with the app in a decoupled way - so they can be used across any module.

##### Event Proxy

The **Event Proxy** passes events triggered with the view's `triggerMethod` to the **behavior**, which can then use them.

Hence, your **behavior** is a receiver for all of the events on your view instance.

##### Triggers

Any **triggers** you define on the **Behavior** will be triggered in response to the appropriate event on the view.

##### Model Events

`modelEvents` will respond to the view's model events.

##### Collection Events

`collectionEvents` will respond to the view's collection events.

##### Grouped Behaviors

Then `behaviors key` allows a **behavior** to group multiple **behaviors** together.

##### Views in Behaviors

In **Behaviors**, the `view` is a reference to the view instance that the behavior is on.

#### Behaviors

(different from **Behavior**)

**Behaviors** attach your behavior instances to their given **View**

NOTE: you MUST override the class level `behaviorsLookup` method or set the option `behaviorClass` for things to work properly.

**behaviorsLookup** - defines where your behavior classes are stored.

**getBehaviorClass** - is responsible for the lookup of single behavior from within the `Behaviors.behaviorsLookup` or elsewhere.

**behaviorClass** - lets you pass a class in for the behavior to use

#### Callbacks

Manages a collection of callback methods, and executes them in an Async-safe manner.

`add` - adds a new callback
`run` - executes all the grouped callbacks

You can optionally specify the context that you want each **callback** to be executed with.

#### Views

Marionette has a base Marionette.View class that other views extend from. This base view provides some common and core functionality for other views to take advantage of.

Note: The `Marionette.View` class is not intended to be used directly. It exists as a base view for other view classes to be extended from.

`View.bindUIElements` - In several cases you need to access ui elements inside the view to retrieve their data or manipulate them. Instead of having jQuery selectors hanging around in the view's code you can define a ui hash that contains a mapping between the ui element's name and its jQuery selector. Afterwards you can simply access it via `this.ui.elementName`.

`templateHelpers` - A `templateHelpers` attribute can be applied to any View object that renders a template. When this attribute is present its contents will be mixed in to the data object that comes back from the serializeData method. This will allow you to create helper methods that can be called from within your templates.

##### Binding to View Events

`Marionette.View` extends `Backbone.View`. It is recommended that you use the `listenTo` method to bind model, collection, or other events from Backbone and Marionette objects.

#### CollectionView

`CollectionView` will loop through all of the models in the specified collection, render each of them using a specified `childView`, then append the results of the child view's el to the collection view's el. 

`childView` - Specify a childView in your collection view definition.

`getChildView` - The value returned by this method is the `ChildView` class that will be instantiated when a Model needs to be initially rendered.

`childViewOptions` - where you need to pass data from your parent collection view to each of the childView instances.

`childEvents` - specify a `childEvents` hash or method to capture all bubbling **childEvents**

`buildChildView` - allows you to override the default `buildChildView` method when a custom view instance needs to be created for the **childView**

`addChild` - is responsible for rendering the **childViews** and adding them to the HTML for the **collectionView** instance.

**CollectionView's** have a whole heap of callbacks, events and child events.

`CollectionView.render` - The render method of the collection view is responsible for rendering the entire collection. It loops through each of the children in the collection and renders them individually as an childView.

`CollectionView Automatic Rendering` - When `add`, `remove` or `reset` are called on `CollectionView`, different actions (e.g. re-rendering) will occur. Check docs.

**Re-Render** - to re-render, just call `render` again as it destroys all previously opened child views.

#### CompositeView

A CompositeView extends from CollectionView for scenarios where it should represent both a branch and leaf in a tree structure, or for scenarios where a collection needs to be rendered within a wrapper template.

E.G. you may want to render a collection view with a model and template so that it will show a parent child with children in the tree.

`template` - When a CompositeView is rendered, the model will be rendered with the template that the view is configured with. You can override the template by passing it in as a constructor option

`childView` - Each childView will be rendered using the childView's template.

#### Controller

*This has no relation to the MVC architectureal pattern.*

Rather, it is a base object that you can build on. 

**Controllers** should be used when you have a task that you would like an object to be responsible for, but none of the other Marionette Classes seem a good fit.

It's a base object for you to use to create a new Class altogether.

#### ItemView

An ItemView is a view that represents a single item - e.g. a **Model** or a **Collection**

##### Render a collection in an ItemView

Usually you'd use `CollectionView` or `CompositeView` for this, but if you just want to render a simple list, or just a small piece of info from the collection, you can do it.

##### Template-less ItemView

An `ItemView` can be attached to existing elements as well.

#### Layout View

A `LayoutView` is a hybrid of an `ItemView` and a collection of Region objects. They are ideal for rendering application layouts with multiple sub-regions managed by specified region managers.

#### Modules

**Modules** can be used to split apart large applications into multiple files, and to build individual components of your app.

To create a module all you need to do is give it a name.

	var MyApp = new Backbone.Marionette.Application();
	var myModule = MyApp.module("MyModule");

#### Object

A base class which other classes can extend from. Object incorporates many backbone conventions and utilities like `initialize` and `Backbone.Events`.

#### Regions

Regions provide consistent methods to manage, show and destroy views in your applications and layouts.

Once a region is defined, you can call its `show` and `empty` methods to display and shut-down a view:

	var myView = new MyView();
	
	// render and display the view
	MyApp.mainRegion.show(myView);
	
	// empties the current view
	MyApp.mainRegion.empty();

`reset` - A region can be reset at any time. This destroys any existing view being displayed, and deletes the cached el.

#### RegionManager

Region managers provide a consistent way to manage a number of `Marionette.Region` objects within an application.

The `RegionManager` is intended to be used by other objects, to facilitate the addition, storage, retrieval, and removal of regions from that object.

#### Renderer

The Renderer object was extracted from the `ItemView` rendering process, in order to create a consistent and re-usable method of rendering a template with or without data.

The basic usage of the **Renderer** is to call the `render` method. This method returns a string containing the result of applying the template using the data object as the context.

#### TemplateCache

The TemplateCache provides a cache for retrieving templates from script blocks in your HTML. This will improve the speed of subsequent calls to get a template.

To use the TemplateCache, call the `get` method on TemplateCache directly.

	var template = Backbone.Marionette.TemplateCache.get("#my-template");
	// use the template
	template({param1:'value1', paramN:'valueN'});

You can also clear items from the cache.




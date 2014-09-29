# Coding rules in a Backbone-Marionette App

### Separation of Concerns in Backbone-Marionette

#### MODEL

**Should:**

* Return information about the data
* Bundle different aspects of the data together for easier consumption by the controller
* Provide filters for the data

**Should Not:**

* Create/Instantiate **Collections** - *collections should instantiate Models*
* Create/Instantiate **Views** - *controller should do this*

#### VIEW

**Should:**

* Build URLs
* Manipulate the DOM
* Handle user interactions

**Should Not:**

* Create/Instantiate views - *controller should do this*

#### CONTROLLER

**Should:**

* Create views
* Set regions
* Refresh regions
* Filter results
* Load/halt extra services - e.g. loading spinner, modal, etc

**Should Not:**

* Directly Manipulate DOM - *views should do this*

### Marionette Usage

#### Models

* Callbacks - manage callbacks in a safe Async manner
* `Object` - if you're going to create a Class and want it to have **initialize** and **events**, use  **Object**

#### Views

* `Behavior` - handle user interactions via a View in a decoupled way. Can apply to Model or Collection events as well. A set of behaviors can be grouped together.
* `Behaviors` - attaches your Behavior instances to a given View, especially if they are in their own file in a different folder.
* `Callbacks` - manage callbacks in a safe Async manner
* `View.bindUIElements` - Instead of having jQuery selectors hanging around in the view’s code you can define a ui hash that contains a mapping between the ui element’s name and its jQuery selector. Afterwards you can simply access it via **this.ui.elementName**
* `CollectionView` - will loop through all of the models in the specified collection, render each of them using a specified **childView**
* `CompositeView` - used to wrap a **CollectionView** and an **ItemView** in a template that you decide. See the difference below.
* `ItemView` - An **ItemView** is a view that represents a single item
* `Object` - if you're going to create a Class and want it to have **initialize** and **events**, use  **Object**

#### Controllers

* `Controller` - While this Marionette object has no relation to the MVC design pattern, it is probably the best to use for the **MVC Controller**. 
* `Callbacks` - manage callbacks in a safe Async manner
* `Regions` - display a `View` at a specified point in the DOM, allowing different **Views** to easily be swapped in and out from that point in the DOM.
* `Object` - if you're going to create a Class and want it to have **initialize** and **events**, use  **Object**
* `Regions` - manage, show and destroy **Views** in your application
* `RegionManager` - manage a number of **Region** objects within an application
* `Renderer` - the `render` method renders a template with or without data
* `TemplateCache` - caches templates for fast retrieval

### FAQ

##### CollectionView vs CompositeView

Let this help you decide which is more appropriate to use:

* A CollectionView is for rendering a repeating list of models, each of which has the same representation/template.

* A CompositeView is for rendering a repeating list of models as well, but also to render some view/template which wraps the list.

Links to other explanations of CompositeView: 

* [http://lostechies.com/derickbailey/2012/04/05/composite-views-tree-structures-tables-and-more/](http://lostechies.com/derickbailey/2012/04/05/composite-views-tree-structures-tables-and-more/)
* [http://stackoverflow.com/questions/22583429/backbone-marionette-composite-view](http://stackoverflow.com/questions/22583429/backbone-marionette-composite-view)

##### Region vs LayoutView

* A `Region` can be used to display a `LayoutView`. A layout will also contain regions. This creates a nested hierarchy that can extend infinitely.

* A `Region` displays a **View** at a specified point in the DOM, allowing different **Views** to easily be swapped in and out from that point in the DOM.

* A `LayoutView` extends from **ItemView**, meaning that it is designed to render a single template. The difference between a **LayoutView** and an **ItemView** is that the **LayoutView** contains **Regions**. 

* When you define a `LayoutView`, you give it a template but you also specify **Regions** that the template contains. This allows you to display other **Views** in the **Regions** that the **LayoutView** defined.

Links to other explanations of CompositeView: 

* [http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/](http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/)
* [http://stackoverflow.com/questions/10521266/whats-the-difference-between-a-marionette-layout-and-a-region](http://stackoverflow.com/questions/10521266/whats-the-difference-between-a-marionette-layout-and-a-region)
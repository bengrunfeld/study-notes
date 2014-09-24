# Backbone.js

Backbone (BB) helps you organize your code and write clean, efficient code.

BB differs from traditional MVC in that it has no `Controller` component.

MVC has 3 components, BB has 6.

#### BB Components

* Models - store data
* Views - display model data onto a page
* Collections - group of models, really a Javascript array
* Events - bind custom Javascript to our code
* Routers - create navigation in our web app (create links). This is where most old Controller code was moved to
* Sync - maps BB data to the server side

**What makes BB components**

* Backbone components are JS objects - simple key/value pairs of JS methods and properties

**BB Dependencies**

* jQuery
* Underscore

Underscore helps you cycle through data and define areas on web page where data will be placed.

#### Adding properties to the Model

Models store application data.

You really want to namespace your variables in BB, like so:

	var app = app || {};
	
	app.someOrange = Backbone.Model.extend({
	
		defaults: {
			color: "blue",
			img: "images/pic.jpg"
		}
	});

To instantiate a new model object, use:

	var specialOrange = new app.someOrange({
		name: "Benjy",
		age: 33,
		color: "green"
	});

Since `img` was not set in `specialOrange`, the default will be used from the constructor function above.

**Watching for Changes**

You can watch for changes to you model using 4 methods:
* `initialize`, `get`, `set`, `on`

* `initialize` watches for changes, and runs as soon as a model instance is created. 

* `get` gets or finds specific properties of our model

* `set` changes existing model properties or adds new ones

* `on` triggers actions when a model changes

**Example of initialize, get and on**

	initalize: function() {
		console.log("Here is your " + this.get("age"));
		
		// Fire the func if something in Model changes
		this.on('change'), function(){
			console.log("Something changed...");
		});
	}

To watch for a model change on only a specific attribute:

	// Fire the func if something in Model changes
	this.on('change:age'), function(){
		console.log("Ben in now " + this.get("age"));
	});

**Making a change to a model**

To make a change to a model, we use the `set` method

	specialOrange.set('age', 34);

#### Collections

A collection is a group of model instances.

To create a collection, you must first **let it know which model it is based on**. 

To add instances to your collection, you can add them as parameters to your collection instance using a JS array, or you can add them one by one using a collections `internal.add` method.

Collections also has a `internal.remove` method that removes instances from a collection.

Here's how you create a collection and define the model it is based on:

	var app = app || {};
	
	app.SomeFruit = Backbone.Collection.extend({
		model: app.someVar
	});

To then instantiate the collection:

	var fruitBasket = new app.SomeFruit([
		specialVar, coolVar, hyperVar
	]);

This uses a JS array as a parameter. You can tell it's an array by the square brackets `[]`.

To dynamically add an instance to a collection: 

	fruitBasket.add(cheekyVar);

#### Views

Views contain the rules for displaying our model data inside of an HTML page.

View decides what HTML structure our data should be displayed inside of. 

Views decide if these elements need to be created in advance or if they already exist on our webpage

Views deicde what methods and properties are needed to get the data inside the web page elements.

BB gets its template functionality directly from Underscore.JS

BB *does* allow you to use other templating libraries like **Handlebars** and **Mustache**, but usually you can just use **Underscore**.

`render` is used to build the HTML based on the rules specified in the view object.

When `render` is invoked, thats the point at which the model data is displayed on a web page.

#### Creating Views

We generally create both a **Model** and a **Collection View**.

The views are very dependent on each other, and as such, they need to communicate with each other.

Here's how we build a **View**:
 
	var app = app || {}
	
	// View for a single model view
	app.someOrange = Backbone.View.extend({
		tagName: "section",
		className: "orange-class",
		
		template: _.template( $("#orange-id").html() ),
	});

`tagName` defines which HTML tag single model data should be placed in.

`className` defines the class that the `section` tag should have. 

If you don't define a `tagName`, BB will automatically assign it to a Div.

To transfer those values to a HTML page, place the following in your HTML:

	<script id="orange-id" type="text/template">
		<a href="<%= link %>">
		<span class="orange-info">Name: <%= name %></span>
		<span class="orange-info">Age: <%= age %></span>
		<span class="orange-info">Color: <%= color %></span>
	</script>
	
The `id` acts as a hook for the template settings that you define in the View object. It will tell the view how ot structure the model data. The type can be anything, but:

* it must be defined
* and it must NOT be `text/javascript` ??

`template: _.template` tells the view which template to target when it starts populating it with Model info. In this case, it targets `orange-id`.

In this case, jQuery's `html()` method will take the model data and place it inside the template.

To tell the View which Model the data is in, use

	var app = app || {}
	
	// View for a single model view
	app.someOrange = Backbone.View.extend({
		tagName: "section",
		className: "orange-class",
		
		template: _.template( $("#orange-id").html() ),
		
		render: function() {
			var orangeTemplate = this.template(this.model.toJSON());
			this.$el.html(orangeTempate);
			return this;
		}
	});

`render` looks at all the logic defined up until this point and builds out the element. We're telling it to do this with the `orangeTemplate` variable. 

`this.template` refers to the template property unique to this view, which is defined in the `template: _.template` line.

We're passing a param to `this.template` and it's a reference to the model that will be available to the view at some point, and it's converting the model data to a JSON-like JavaScript object with the `toJSON` method.

`this.$el` - contains all the properties defined above and passes them to Backbone inside of a package for a much easier way to reference it.

The dollar sign `$` in front of `el` means you're referencing it with jQuery, which means we can apply jQuery methods to it. e.g. `.html()`

#### Creating a Collection View
	
	// Namespace the var
	var app = || {};
	
	// The view
	app.allOrangeView = Backbone.View.extend({
		tagName: "section",
		
		render: function(){
			this.collection.each(this.addOrange, this);
			return this;
		},
		
		addOrange: function(orange) {
			var orangeView = new app.singleOrangeView ({model: orange});
			this.$el.append(flowerView.render().el);
		}
	});

`this.collection` is a reference to whatever collection we've attached to it. `.each(this.addOrange, this)` loops through the items inside the collection and runs the `addOrange` function. The final `this` inside of each gives context to all this code.

The `render` method is applying the `addOrange` method to every model instance in the collection. 

A model needs to be assigned to `orangeView` and this is done with `({model: orange})`. This means that all singe model instances that are of the `orange` type are exposed to the `orangeView`'s render method.

`this.$el` is a jQuery reference to the element in this view, which is the `section` tag. JQuery's `append` method is chained to it and will load whatever is happening inside of these parenthesis here.

#### Loading Model Data onto a Webpage

On your main JS page, add:

	var orangeGroupView = new app.allOrangeView({collection: orangeGroup});
	
	$("#allOranges").html(orangeGroupView.render().el);
	
This creates a new instance of `allOrangeView`, which is a collection view, and assigns it to a variable named `orangeGroupView`.

`({collection: orangeGroup})` - assigns this collection view to an actual collection. `orangeGroup` is the array of model instances that was previously created.


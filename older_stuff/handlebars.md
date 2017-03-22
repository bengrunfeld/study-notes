# Handlebars

Here is a full implementation of the Handlebars workflow:


	<script id="header" type="text/x-handlebars-template">​
		<h1>{{ title }}</h1>​
	​</script>
	
	var data = {title: "Rocky Horror Picture Show"};
	
	// Target the script tag using the `id`
	var template = $("#header").html();
	
	// `Handlebars.compile` returns a function
	var compiledTemplate = Handlebars.compile(template);
	
	// Use the returned function to inject the data
	$(document.body).append(compiledTemplate(data)); 

## Custom Function Helpers

You can insert any Javascript logic you want into a custom helper

	Handlebars.registerHelper ("nameOfCustomHelper", function (data) {
		var result = (data == true) ? "Yes": "No";
		console.log("They said " + result);
	});

Then it is used in the HTML like this:

	<script id="custom-helper" type="x-handlebars-template">
		{{nameOfCustomHelper}}
	</script>
		
## Custom Block Helpers


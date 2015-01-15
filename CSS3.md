# CSS 3:


Written by: Ben Grunfeld
Last Updated: 18/6/2012
Sources: Nearly all the content in this tutorial was learned from the Lynda tutorial series “CSS3 First Look”

## Case Sensitive:

CSS3 is case sensitive


## SELECTORS


#### Child and Sibling Selectors


Child Selector:
div > h1 : targets any element that is a child of the preceding element

Adjacent Sibling Selector:
h1 + p : Targets any element that is both a sibling and directly preceded by the first element

General Sibling Selector:
h1 ~ p : Targets any element that is both a sibling and preceded by the first element.


#### Attribute Selectors


a[href] : Targets any element that contains the specified attribute
a[href="home.html"] : Targets any element that possesses the attribute value (home.html) - use quotation marks if there is punctuation or whitespace
a[title=home] : Targets any element that possesses the attribute value (any link with a title of home)
a[alt~="home"] : Targets an element where the attribute value is a whitespace separated list of words, one of which matches the provided value exactly.
a[hreflang|="en"] : Targets an element where the attribute value is either the exact value, or beginning with the value and followed immediately by a "-".

#### CSS3 Attribute Selectors

a[href^="http://"] : Targets an element where the attribute value appears at the beginning of the string value.
a[href$=".pdf"] : Targets an element where the attribute value appears at the end of the string value.
div[id*="main"] : Targets an element where the attribute value appears anywhere within the string value. (e.g. mainContent)


#### Pseudo-Class UI Selectors

Element state can be :enabled, :disabled, or :checked

By default, all form fields are in the enabled state, but with Javascript, you can change their state to disabled, and back again.
input:enabled and input:disabled can be used to target the following form elements: BUTTON, COMMAND, FIELDSET, INPUT, KEYGEN, OPTGROUP, OPTION, SELECT, and TEXTAREA.

input:checked - Targets any form element that can accept the checked or selected state and is checked. Applies to CHECKBOXES and RADIO BUTTONS.


#### Negation Pseudo-Class Selectors

div:not(.caption) : Targets any element that does NOT match the argument expression. (e.g. here it would target any div that DOES NOT have a class of "caption"

div:not(.caption):not(.largeImage) : This allows you to NOT select all class="caption" div OR class="largeImage"

e.g.
img:not([alt*="thumb"]) : This example would NOT target any img whose alt attribute contained the string value "thumb"


#### Target Pseudo-Class Selectors

div:target : Targets any element that is the current target of a fragment identifier in the page's URI.
This really works for internal links in a page, or when you click a link that takes you to a specific part of the page.

e.g.

`#mainArticle div:target h3`  - Targets any h3 that is the target of the page, meaning it's title appears in the URI of the page


#### Structural Pseudo-Class Selectors


Structural selectors are pseudo-class selectors that allow you to target elements on the page based on their relationships with the DOM tree.

	:first-child
	:last-child
	:only-child
	:first-of-type

`:root` - Targets the document's root element. In HTML, this is the html element.

p:empty - Targets any empty element of the targeted type. Comments do not affect whether an element is considered empty. e.g. here, it would target <p></p> or <p><!-- hi --></p>


li:first-child
li:last-child  - Targets elements when they are either the first or last children of a parent element. Here it would select either the first or the last <li>something</li> in a list


p:first-of-type
p:last-of-type  - Targets elements when the are either the first or last element of a specific type within a parent.


p:only-child  
p:only-of-type - Targets elements when the are the only element of a parent (only child) or when they are the only element of a specific type within a parent (only of type)


#### Nth-Type Selectors:

:nth-child(n) - e.g. li:nth-child(2) this would target the second li item. But if you put li:nth-child(2n), it would target every 2nd li.
:nth-last-child(n)
:nth-of-type(n)
:nth-last-of-type(n)

Allows you to target a range of elements based on arguments passed into the selector and selector itself.

:nth-child(an + b)
The argument (an+b) determines the range of the elements targeted.

:nth-child(even)
:nth-child(odd)

The keywords "even" and "odd" can be used to target all even or odd numbered children within a parent.


:nth-child(an + b)
li:nth-child(2n + 1)

Basic formula: "n" represents the variable itself or a positive or negative integer that sets the base value. "a" is a grouping value and indicates how far the selector should count through the child elements before selecting another value. "b" is an offset value that determines where the count begins. In this example, the count would start on the first item (b) and skip every second item (a). This would result in all odd-numbered children being selected.


#### Effect of Negative Values on Nth-Child Selectors:

li:nth-child(1n+5) -  When the integer preceding 'n' is positive, it will count DOWN through the list
li:nth-child(-1n+5) -  When the integer preceding 'n' is negative, it will count UP through the list


You can group arguments and selectors together.

e.g.
In this example, we will leave out the first 3 and and the last 3 li's in a list.
li:nth-child(1n+4):nth-last-child(1n+4)

To do the opposite and only include the first 3 and the last 3, you need to do something a little different
li:nth-child(-1n+3),li:nth-last-child(-1n+3)

We need to use a comma separated list, because of interuption of the element targeting. If it starts, and then ends, you can create a group. If there's a break, then a new group, then you need to use a comman separated list.


EXAMPLES:

*:first-child { color:red; }
Will target ALL first children


## COLOR IN CSS3


RGB = red, green, blue
RGBA = red, green, blue, & alpha

HSL = hue, saturation, lightness
HSLA = hue, saturation, lightness, & alpha

CMYK = cyan, magenta, yellow, & black 

e.g. rgba(10,15,20,.5);


## GRADIENTS IN CSS3


Webkit and Mozilla both still in use.


#### Webkit Gradient Implementation:


CSS gradients can be added to the following properties:
	background-image
	border-image
	list-style-image
	generated content


Linear Top to Bottom Gradient:	
div { background: linear-gradient(#000, #FFF); }

Using the 'to' keyword indicates that the gradient should go in a certain direction (top, bottom, left, right)
div { background: linear-gradient(to right, #000, #FFF); }

You can make simple diagonals by using two direction keywords; this one will go from top-left to bottom-right:
div { background: linear-gradient(to right bottom, #000, #FFF); }

For more complex diagonals you can still use angles:
div { background: linear-gradient(70deg, #000, #FFF); }

Each color-stop can also have a length or percentage value to further customise the gradient:
div { background: linear-gradient(#000 20px, #FFF 90%, #000); }


#### FONTS IN CSS3


Also see: http://www.fontsquirrel.com/fontface/generator

Font-face declarations are made at the top of the style sheets

@font-face {
	font-family: "Bens Font";
	src:url("_assets/myFont.eot");
}

After you declare this at the top of stylesheet, you can use 'Bens Font' to reference this font. The src is the path to where the font information is being stored.


#### Text Shadows:

text-shadow: x-offset(px) y-offset(px) blur(px) color(#hex);

e.g.
text-shadow: 5px 5px 10px #333;

You can also create multiple shadows but creating a comma separated list. The last one gets applied on the bottom layer, and then the others are stacked on top of it.
e.g. (creates a glow)
text-shadow: 0 0 2px #fff, 0 0 5px #ddd, 0 0 10px #ccc;

to create the effect in IE, use 
filter: dropshadow(color=#ccc, offx=1, offy=5);

#### Columns:


	div {
		-moz-column-count:2;
		-webkit-column-count:2;
		column-count:2;
		
		-moz-column-width:300px  /* Doesn't work so well */
		-webkit-column-width:300px /* Doesn't work so well */
		
		-moz-column-gap:30px
		-webkit-column-gap:30px
		
		-moz-column-rule-style:solid;	/* creates a rule between the columns */
		-moz-column-rule-color:#999;
		-moz-column-width-width: 1px;
		
		-webkit-column-rule-style:solid;
		-webkit-column-rule-color:#999;
		-webkit-column-width-width: 1px;
		-webkit-column-rule
	}
	
We put in the non-prefixed code as well, in case Mozilla or others remove the prefixed versions.


## FLEXIBLE BOX MODEL


Works by allowing you to determine how child elements should be arranged within parents. In addition to layout, controls exist to assign available space within the parent to it's children.

To use:

display:box	- you must apply to the parent element. This enables flexbox control to all child elements
display:inline-box; -enables box positioning for in-line elements

Once you've declared a parent element as a box, you have 8 properties to help you control the layout of the child elements.
box-align		box-direction
box-flex		box-flex-group
box-lines		box-ordinal-group
box-orient		box-pack



#### box-align

Box-align allows you to align elements along the opposite axis of the element's orientation. Box-pack allows you to align elements along the orientation axis.

values: start, end, center, baseline, stretch (default)
(works together within box-pack)

start: calculates their intrinsic height (how much text/content there is), aligns the top edge of the element.
end: aligns the bottom edge and pushes the child to the bottom/end of the element
center: aligns the middle of a child element to the center of it's parent


#### box-direction

Box-direction allows you to allow normal flow or reverse the display order of child objects.

values: normal, reverse


#### box-flex

-When applied to child elements, it makes them flexible within the layout. Any value over 0 enables box flexibility. A sizing ratio is created based on the box-flex values. An element with a box flex value of 2 would reveive twice the available space as the other elements.
	e.g.
	.child1 {box-flex:1}
	.child2 {box-flex:2}
	.child3 {box-flex:0; width:20px;}
	Here, the width of child3 is determined first, then child2 would receive 2 x as flexible as child1.
	
	When you set the box-flex property for a child element, it OVERRIDES the fixed width property that may have been set for that element.
	
	If you want box-flex to work, the parent element has to have an explicit width set. This can be a percentage.

	
#### box-flex-group



#### box-lines



#### box-ordinal-group

Box-ordinal-group allows you to assign a display order to child objects by assigning a value to them. Lower value numbers are displayed first, followed by higher values. Children with the same value are grouped together, displaying in order.

values: <integer> 

e.g.	.child1 {box-ordinal-group: 4}
		.child2 {box-ordinal-group: 2}
		.child3 {box-ordinal-group: 3}
		.child4 {box-ordinal-group: 1}
		.child5 {box-ordinal-group: 2}
		here, child2 and child5 will be grouped together.
		
#### box-orient	

-allows you to control the orientation of child elements. Can be 'horizontal' or 'vertical'


#### box-pack

Box-pack allows you to align elements along the orientation axis.
values: start, end, center, justify.


## Media Queries

A common practice in CSS2 was to use media declarations to serve the proper CSS for that device. A shortcoming of this technique was that many devices never embraced media declarations as intended. Other devices - like mobile devices - exist in a variety of so many different screen resolutions, that a single media declaration is unable to solve their needs.

CSS3 addresses this with the addition of media queries. Media queries help you extend media declarations by additionally filtering the application of styles through the use of things such as screen size, resolution, orientation and aspect ratio. 
This functionality allows you to have an amazing amount of control over how your sites render over different device types.

Basically, if you’re viewing a site on an iPad, iPhone, or desktop browser, the stylesheet can be changed to suit the viewing platform. 


#### Media Query Syntax

Media Queries contain a media type, and one or more expressions. 

e.g.1: <link href=”style.css” rel=”stylesheet” media=”screen and (color)”>
In e.g.1, screen is the media type, and (color) is the expression.

The expressions contain media features, which are then evaluated and used to determine whether the styles are applied or not. You can further refine media queries by adding keywords.

Keywords: “and” “only” “not”

e.g2: <link href=”style.css” rel=”stylesheet” media=”only screen and (max-width:480px)”>
by using ‘only screen’, this style would be ignored by devices that don’t support media queries


ONLY and NOT can be used to filter out media types.  

ONLY detects for media query support.

You can also comma separate a list of media queries. A comma is treated like the logical “OR” operator. 

e.g.3: <link href=”style.css” rel=”stylesheet” media=”screen and (max-width:480px), projection and (color)”>
In this case, if one of the expressions returns true, the entire list is applied


#### Media Query Syntax Variations

Media queries can also be used in several different places. 

Linking External Styles:
<link href=”style.css” rel=”stylesheet” media=”screen and (color)”>


If you’re creating modular stylesheets and are using @import to bring in external styles within existing stylesheets, you can add the following to enable media queries:
@import url(“style.css”) screen and (color);

You can also apply media queries within stylesheets by using an @media block to surround styles, you can filter styles within individual sheets as well
@media screen and (color) {
	...your styles...
}

If you don’t declare a media type, all is assumed.

## Media Features


Media Feature
Value Type 
Example
Max-Min Example
width
length
960px
min-width:960px
height
length
960px
max-height:40em
device-width
length
40em
min-device-width:480px
device-height
length
60em
min-device-height:120px
orientation
keyword
portrait | landscape


aspect-ratio
ratio
4/3
min-aspect-ratio:16/9
device-aspect ratio
ratio
16/9
max-device-aspect-ratio:4/3
color
integer
min-color:2
min-color:2
color-index
integer
(color index)
min-color-index:516
monochrome
integer
(monochrome)
min-monochrome:1
resolution
resolution
300dpi
min-resolution:150dpi
scan
keyword
progressive | interface


grid
integer
(grid)


NOTE:
-In the case of color, the device checks for bit depth, since anything over 0 would indicate a color device, it’s sufficient just to input (color).

-Ratios are expressed as 2 values separated by a forward slash e.g 16/9. The 2 values are compared to the width and height of the device to establish the correct ratio. 


#### The Difference Between Height and Device Height:

Device media features (like “device-width”) refer to the actual values for the device itself, whereas non device media features (like “wdith”) refer to the viewport of the browser agent.

Any device prefix checks the devices information rather than the information from the current viewport.


#### Checking for Different Devices:

Main stylesheet applies to ALL Media Screen and Projection
<link href=”style.css” rel=”stylesheet” media=”screen,projection”>

Detecting for Tablets
<link href=”tablet.css” rel=”stylesheet” media=”all and (min-width:481px) and (max-width:768px)”>

Detecting for Phones
<link href=”phone.css” rel=”stylesheet” media=”all and (min-width:0px) and (max-width:480px)”>


## How Stylesheets Overwrite each Other:


In this example, style.css would be the main stylesheet, and the code in tablet.css and phone.css would override only override the corresponding code in style.css if they were activated. 

We could also have created completely different stylesheets that remained entirely separate, or used the other 2 techniques written about above (modular stylesheets or @media blocks).


## Overwriting Selectors:

1. copy and paste entire selector into new document. We do this because otherwise you will forget what other rules you have written inside that selector.

2. Just write the new styles you’d like and they will override the main stylesheet.


## Menu and Sidebar Content for Tablets:

Best to use min-width and max-width instead of device-width.
Because mobile display are sometimes served at a very different resolution and screen size based on what the manufacturer’s idea of what an ideal size is. So the best idea is to use min/max-width.


## Working with Page Orientation on Mobile Devices:

In order to detect whether the iPad (or similar device) is in portrait or landscape:

<link href=”tablet_portrait.css” rel=”stylesheet” media=”all and (orientation:portrait)”>
<link href=”tablet_portrait.css” rel=”stylesheet” media=”all and (orientation:landscape)”>


#### Hiding a Div, then Displaying it When It Gets Thumbed:

Set height = height of the icon/link (e.g. 150px). Set overflow=hidden. Set transition (also -webkit and -moz) = transition: height 0.75s ease;

The create a div with a :hover and set height to full height = height=430px; overflow=hidden, cursor:pointer;

Hover events in ios are treated as touches. 



#### The Viewport Meta Element

<meta name=”viewport” content=”width=device-width,minimum-scale=1.0,maximum-scale=1.0”>

This says, “Make the width of the page equal to the width of the device”. By setting the minimum and maximum scale, you are not allowing pinch-zooming on the device, so basically the site acts like an app. You can also set no-scale. 

To learn more, go to:
developer.apple.com



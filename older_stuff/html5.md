# HTML5 Notes

Written by: Ben Grunfeld
Completed: 18/6/2012
Sources: Nearly all the content in this tutorial was learned from the Lynda tutorial series “HTML5: Structure, Syntax, and Semantics with James Williamson”, with many excerpts coming from the W3.org HTML5 Spec Author view.


## Introduction

HTML5 is the latest revision of HTML, and is designed to allow the creation of richer, more semantic code. It also addresses how modern web applications are created.

It retains backwards compatibility of previous versions of HTML

It focuses heavily on the development of applications.

Contains explicit rules about parsing documents and error handling

Spec exists at Whatwg.org AND http://dev.w3.org/html5/spec-author-view/

The problem with HTML4 is that when you use <div id=""> tags, there are no standadized id and class values. You can use anything you want. 
So it is very hard to create a system around this, as there is very little meaning to what's happening in the code.



## HTML5 Spec Author View - Edition for Web Authors

http://dev.w3.org/html5/spec-author-view/


## Backwards Compatibility

You can still use classes and ID's with HTML5 tags.

So you can have <article id="news">

End users won't see the difference between HTML4 and HTML5 - but browsers do!
That's the whole point of HTML5 - making your code more accessible to browsers and readers.


## Document Type Declaration:

Tells browser agents which set of parsing rules to use based on the document type.

HTML5 is considered a living standard, which is why we don't need a version number. We also don't need a document type declaration URL.
All we really need to do is declare the document as an HTML file.

In fact, we don't even really need the doctype, but for backwards compatability - it helps older browsers from triggering "Quirk" mode.

	<!doctype html>

	
## Language:

<html lang="en">

We've authoring this in English, so we've passed along English as the authoring language (lang="en"). It's optional to pass this to the browser, but it's a good idea, so that any user agent knows which language you're using.


## Character Encoding:

Typically when an HTTP header is sent, the character encoding is sent along with it, but sometimes this doesn't happen, so it's always helpful to do that in the head of your HTML file.

In XHTML, this was done in the meta tag. 

	<head>
		<meta charset="utf-8">
	</head>

That's it!


## HTML5 Syntax Rules:


In XHTML, the following rules applied:
	-tags all needed to be in lower case
	-attributes must be in quotation marks
	-tags that don't contain content need to be self-closing e.g. `<br />`

This was driven by XML syntax.

In HTML5, the following rules NOW apply:
	-tags can be in any case, or even in camel case
	-attributes don't need quotation marks
	-some opening and closing tags are even OPTIONAL. These are HTML, HEAD and BODY. You can even get rid of these altogether.
	-some tags are optional to close: li, definition lists, p, tr, th, td - you don't even need to close them.

	This is not good authoring practice, but it's still allowed.

Remember, HTML5 and HTML is just a mark-up language, not an authoring language. It's designed to identify content, and that's it. The role of most user-agents is to display the content the way the author intended, even if they're messy, non-human authors. That's why we have loose rules now.

If you pass multiple values as an attribute, you need quotation marks. 

## Booleans:

You can now use booleans in HTML5, and the presence of the attribute name indicates that it is TRUE.

e.g.1 
`<div id="bar" hidden="hidden">`
uses the new hidden attribute in HTML5


e.g.2
`<div id="bar" hidden>`
just the presence of the attribute confirms that the attribute is TRUE


## Links and Mime Types:

In `<link>`, we don't need to use type="text/css"

In `<script>`, javascript is assumed, so we don't need to use `type="text/javascript"`. Although, if you're using any other type of scripting language, you need to pass the type value.

## Void Tags

Some tags in HTML are considered void - meaning they can never contain any content.
e.g. `<meta />`, `<link />`, `<br />`

In HTML5, you don't need to self-close a tag.
e.g. `<meta>`, `<link>`, `<br>`

e.g. `<link rel="stylesheet" href="theme.css">`


## HTML5 STRUCTURAL ELEMENTS

HTML5 has a whole new set of Content Models

In http://dev.w3.org/html5/spec-author-view/, if you go into a particular element, like the Header element:
	Categories: tell you what type of content model it is.
	Context in which this element can be used: tells you where you can use the tag
	Content model: tells you what can go in this tag
	Note: tells you what the element is intended to be used for
	

#### The Header Element

Headers can't contain headers or footers

Note: A header element is intended to usually contain the section's heading (an h1–h6 element or an hgroup element), but this is not required. The header element can also be used to wrap a section's table of contents, a search form, or any relevant logos.

Note: The Header element is not Sectioning Content

You can use the Header element as many times as you need in your document. It's not just a single use tag.

#### The Nav Element

The nav element allows you to group and identify site navigation.

The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

Not all groups of links on a page need to be in a nav element — the element is primarily intended for sections that consist of major navigation blocks. In particular, it is common for footers to have a short list of links to various pages of a site, such as the terms of service, the home page, and a copyright page. The footer element alone is sufficient for such cases; while a nav element can be used in such cases, it is usually unnecessary.

User agents (such as screen readers) that are targeted at users who can benefit from navigation information being omitted in the initial rendering, or who can benefit from navigation information being immediately available, can use this element as a way to determine what content on the page to initially skip and/or provide on request.

A nav element can contain more than just links. Can contain <h1-5> tags, <ul>, <li> and others.

#### The Section Element

Categories: Flow content.
			Sectioning content.
			Palpable content.

Contexts in which this element can be used: Where flow content is expected.
Content model: Flow content.

##### Content attributes: Global attributes

Main Explanation: The Section Element represents a THEMANTIC GROUPING OF CONTENT.

Note: The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content, typically with a heading.

Examples of sections would be chapters, the various tabbed pages in a tabbed dialog box, or the numbered sections of a thesis. A Web site's home page could be split into sections for an introduction, news items, and contact information.

IMPORTANT: Authors are encouraged to use the <article> element instead of the section element when it would make sense to syndicate the contents of the element.

The section element is not a generic container element. When an element is needed only for styling purposes or as a convenience for scripting, authors are encouraged to use the div element instead. A general rule is that the section element is appropriate only if the element's contents would be listed explicitly in the document's outline.

You can have articles inside of sections, sections inside of articles, sections inside of sections.

#### The Article Element:

Categories: Flow content.
			Sectioning content.
			Palpable content.
			
Contexts in which this element can be used: Where flow content is expected.
Content model:Flow content.

##### Content attributes: Global attributes

The article element represents a self-contained composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

When article elements are nested, the inner article elements represent articles that are in principle related to the contents of the outer article. For instance, a blog entry on a site that accepts user-submitted comments could represent the comments as article elements nested within the article element for the blog entry.

Author information associated with an article element (q.v. the address element) does not apply to nested article elements.

When used specifically with content to be redistributed in syndication, the article element is similar in purpose to the entry element in Atom. [ATOM]


#### The Aside Element:

Categories: Flow content.
			Sectioning content.
			Palpable content.
			
Contexts in which this element can be used: Where flow content is expected.
Content model: Flow content.

##### Content attributes: Global attributes

The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.

The element can be used for typographical effects like pull quotes or sidebars, for advertising, for groups of nav elements, and for other content that is considered separate from the main content of the page.

It's not appropriate to use the aside element just for parentheticals, since those are part of the main flow of the document.

IMPORTANT: The placement of the <aside> element dramatically affects it's meaning, so if you use it directly on the <body> element, then it's content should related directly to the entire page. It's designed to contain content that's directly related to the content surrounding it.


#### The Footer Element:

Categories: Flow content.
			Palpable content.

Contexts in which this element can be used: Where flow content is expected.
Content model: Flow content, but with no header or footer element descendants.

##### Content attributes: Global attributes

The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.

When the footer element contains entire sections, they represent appendices, indexes, long colophons, verbose license agreements, and other such content.

Contact information for the author or editor of a section belongs in an address element, possibly itself inside a footer. Bylines and other information that could be suitable for both a header or a footer can be placed in either (or neither). The primary purpose of these elements is merely to help the author write self-explanatory markup that is easy to maintain and style; they are not intended to impose specific structures on authors.

Footers don't necessarily have to appear at the end of a section, though they usually do.

When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.

The footer element is not sectioning content; it doesn't introduce a new section.


## CONTENT MODELS

Each element in HTML falls into zero or more categories that group elements with similar characteristics together. The following broad categories are used in this specification:

Metadata content: is content that sets up the presentation or behavior of the rest of the content, or that sets up the relationship of the document with other documents, or that conveys other "out of band" information.
e.g. `<link>`, `<meta>`, `<title>`, `<script>`

Flow content: Most elements that are used in the body of documents and applications are categorized as flow content.

a abbr address area (if it is a descendant of a map element) article aside audio b bdi bdo blockquote br button canvas cite code command datalist del details dfn dialog div dl em embed fieldset figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr i iframe img input ins kbd keygen label map mark math menu meter nav noscript object ol output p pre progress q ruby s samp script section select small span strong style (if the scoped attribute is present) sub sup svg table textarea time u ul var video wbr text

IMPORTANT: can be inline or block level element. 


Sectioning content: is content that defines the scope of headings and footers.

article, aside, nav, section

IMPORTANT: Any use of these elements creates a brand new section within the document.

Each sectioning content element potentially has a heading and an outline. See the section on headings and sections for further details.

There are also certain elements that are sectioning roots. These are distinct from sectioning content, but they can also have an outline.


Heading content: defines the header of a section (whether explicitly marked up using sectioning content elements, or implied by the heading content itself).

h1 h2 h3 h4 h5 h6 hgroup

NOTE: The header element is not part of the Heading content.


Phrasing content: is the text of the document, as well as elements that mark up that text at the intra-paragraph level. Runs of phrasing content form paragraphs.

a (if it contains only phrasing content) abbr area (if it is a descendant of a map element) audio b bdi bdo br button canvas cite code command datalist del (if it contains only phrasing content) dfn em embed i iframe img input ins (if it contains only phrasing content) kbd keygen label map (if it contains only phrasing content) mark math meter noscript object output progress q ruby s samp script select small span strong sub sup svg textarea time u var video wbr text

IMPORTANT: Most elements that are categorized as phrasing content can only contain elements that are themselves categorized as phrasing content, not any flow content.


Embedded content: is content that imports another resource into the document, or content from another vocabulary that is inserted into the document.

e.g. audio, canvas, embed, iframe, img, math, object, svg, video

Interactive content: is content that is specifically intended for user interaction.

a, audio (if the controls attribute is present) button, details, embed, iframe, img (if the usemap attribute is present), input (if the type attribute is not in the hidden state), keygen, label, menu (if the type attribute is in the toolbar state) object (if the usemap attribute is present), select, textarea, video (if the controls attribute is present)


## The Hidden Attribute:

The hidden attribute is a new attribute in HTML5, and hides the content of the page until you establish it later with scripting.

e.g. <div hidden>


## HTML5 DOCUMENT STRUCTURE:

It's important to create a document that has correct structure, because that makes it easier to syndicate and makes it more accessible. 

#### Outline Algorithm as a Table of Contents:

One way to picture the outline alogrithm that HTML5 uses is to imagine your page as a table of contents. 

In a typical table of contents, you'd list the most important sections as individual items, and then list interior sections nested within them.

e.g. 
Physics...............1
	Lasers............5
		Super Lasers..6
		Small Lasers..9
Chemistry............10
	Elements.........12
		Carbon.......13
		Hydrogen.....14
		

#### Outline Algorithm Parsing

	-Section and Heading content is used to define the outline
	-Body is established as the outline root
	-Items are added to the outline as sectioning content is found
	-If the section contains a heading, the heading is used to name a section
	-Since sections are treated as containers, any new sections created within an existing one are nested in the outline
	
#### What elements create a new section

	<article>, <aside>, <section>, <nav>, <h1-6>
	
Their use should be restricted to when you intend to create a new section in your document.


#### Parsing Headings

The first heading content element in a section is used to define a heading for that section. After that, any additional headings will create new nested headings based on their ranks.


#### HTML5 Outlines

There are 2 things that can create sections within your document - sectioning content (section, article, aside, nav) and headings. 

A GREAT free tool to use for this is the HTML5 Outliner Tool:
[http://gsnedders.html5.org/outliner/](http://gsnedders.html5.org/outliner/)

You may ask, why do I have to pay so much attention to the fact that the HTML5 Outline is correct, even when it looks fine in a browser.

Because not only humans read your site. Automatic outline generation is very important for search engines, assistive technologies, syndication readers, and other web crawlers. If you have a poorly formed document, your table of contents will be confusing, search engines won't be able to properly rank page data, etc. It's worth doing it right.

Remember, the body tag counts as an initial section.


#### Using Headings With Sectioning Content:

In HTML5, we have a lot more flexibility with the use of headings. With older versions of HTML, we only wanted one h1 tag per page. Now, each section can have it's own internal hirarchy of headings. So you can use an h1 in each section. 

Remember: Div tags don't create sections, but heading tags do.

e.g. 1 `<div><h3>`New section`</h3></div>`
will create a new section

e.g. 2 `<div><p>`Doesn't Create New Section`</p></div>`
will NOT create a new section

If you have three `<h1>`'s at the root level, they will appear as 

1. Title1
2. Title2
3. Title3

But if you have 

	<h1>Title1</h1>
	<section><h1>Title2</h1></section>
	<section><h1>Title2</h1></section>

Then that will render as 

1. Title1
	1. Title2
	2. Title3
	

Although, if you have 

	<h1>Title1<h1>
	<h2>Title2</h2>
	<h2>Title3</h2>

Then that will render in exactly the same way - as so:

1. Title1
	1. Title2
	2. Title3
	
So it's up to you how to structure the document.

In HTML, you could only use one `<h1>` tag.

In HTML5, we have a whole new set of rules, and these individual sections have their own distinct heirarchy apart from the page. This means that it's possible/desireable to use more than one `<h1>` on a page.

	<h1>Explore Cali</h1>
	<section>
	<h1>Our Tours</h1>
	<h2>Backpack Cali</h2>
	<h2>Cycle Cali</h2>
	</section>
	<section>
	<h1>Tour Reviews</h1>
	<h2>Firebreak Trail</h2>
	<h3>Bonzai Trail</h3>
	<h3>Lower Loop</h3>
	</section>
	<h2>Monthly Sections</h2>

The above code will create the following structure:

1. Explore Cali
	1. Our Tours
		1. Backpack Cali
		2. Cycle Cali
	2. Tour Reviews
		1. Firebreak Trail
			1. Bonzai Trail
			2. Lower Loop
	3. Monthly Sections

Notice how the `<h2>` at the bottom enjoys the exact status of the `<h1>`'s nested inside the sections. This means you have a lot of lee-way on how you want to structure your document, as you can either use a lower `<h>` tag by itself, or a higher `<h>` tag nested inside a sectioning element.

Because `<header>` and `<footer>` are not sectioning content, if you use these tags but  want them to appear in the document outline, you need to use a heading tag `<h1-6>`. But you have to be careful which `<h>` tag you use, because that will determine how close to the document root it appears in the outline.

EXERPT: Sections may contain headings of any rank, but authors are strongly encouraged to either use only h1 elements, or to use elements of the appropriate rank for the sections nesting level.

What that means is you've got to come up with 


#### The <hgroup> Element

The <hgroup> element allows us to group related heading content together overriding the normal sectioning rules.

It belongs to Heading Content, and can only contain h1, h2, h3, h4, h5, h6

The hgroup element represents the heading of a section. The element is used to group a set of h1–h6 elements when the heading has multiple levels, such as subheadings, alternative titles, or taglines.

For the purposes of document summaries, outlines, and the like, the text of hgroup elements is defined to be the text of the highest ranked h1–h6 element descendant of the hgroup element, if there are any such elements, and the first such element if there are multiple elements with that rank. If there are no such elements, then the text of the hgroup element is the empty string.

So if you have 

	<h1>Our page</h1>
	<h2>Salesy Tagline</h2>

The salesy tagline will appear in the document outline - which we don't want

To solve this, we use the hgroup tag, as follows

	<hgroup>
		<h1>Our page</h1>
		<h2>Salesy Tagline</h2>
	</hgroup>

Now all that will appear in the document outline will be the <h1>

It doesn't matter which order the <h> tags are in inside the <hgroup> tag, so the <h1> can be the 3rd tag, and it doesn't matter. It will still appear as the heading of the section, since it is the highest heading.

Remember, `<hgroup>` can ONLY handle headings.


#### Correctly Nesting Inside the Outline Structure:

If you're having trouble creating a the structure you intended by only using <h> tags, you need to use sectioning content (section, article, nav, aside) to group your content and headings. This allows you the flexibility of interupting the outline, where just using <h> tags wouldn't.


#### Sectioning Roots

Sectioning roots contain their own internal outline but that outline is not added to any ancestor or parent elements outline.

Essentially, the contents of sectioning roots are hidden from the rest of its parent elements outline.

Sectioning Roots are: blockquote, details, fieldset, figure, td, body


## STRUCTURING A PAGE IN HTML5


1. Start with Content - the reason being that you have to think about how devices will access your content, now and in the future when the content changes.

	1.1 Make a list all the big pieces of content and quantify them, so that you can think about the document structure, and how they will relate to each other. 

e.g. 
-Explore Ohio
-Bike trails in Ohio
-Cycling Reviews
-Contact Info
-Legal Info
	
	1.2 Make a list the small pieces of content nested within the headings and quantify them via a nesting structure.

e.g. 
1. Explore Ohio
	1.1 North Ohio
	1.2 South Ohio
2. Bike trails in Ohio
	2.1 Must see trails
		2.1.1 Must see trails - easy
		2.1.2 Must see trails - hard
	2.2 Trails to avoid
3. Cycling Reviews
	3.1 User submitted
	3.2 Submitted by us
4. Contact Info
5. Legal Info

	2. Make a basic pencil sketch, then a wireframe, then a mockup in Photoshop, and send it to your client
	
	3. Code it
	


#### Deciding What Structural Element To Use


It's sometimes hard to decide which structural element to use, because their roles can overlap or be slightly similar, insomuch as it is confusing to a web author.

Here is a simple system to decide which structural element to use:

TEST 1:
1. Should the element start a new section
	1.1 YES: Go to TEST 2
	1.2 NO: Go to 2.
2. Is it introductory content
	2.1 YES: Use <header>
	2.2 NO: Go to 3.
3. Does the content contain information about the author, related links, or legal information?
	3.1 YES: Use <footer> (remember, footers don't need to be at the bottom of the page or section)
	3.2 NO: Go to 4.
4. Is the content being grouped together for stylistic reasons, or to extend its meaning further through an ID or Class attribute?
	4.1 YES: Use <div>
	4.2 NO: Go to 5.
5. Then this is NOT Sectioning Content. Find the appropriate grouping content element.

TEST 2:
1. Should the element start a new section
	1.1 YES: Go to 2.
	1.2 NO: Go to TEST 1
2. Is it a section of major navigation
	2.1 YES: Use <nav>
	2.2 NO: Go to 3.
3. Is the content self-contained and could it survive independently of the document? Could I syndicate this?
	3.1 YES: Use <article>
	3.2 NO: Go to 4.
4. Is the content only tangentially related to the countent around it
	4.1 YES: Use <aside>
	4.2 NO: Got to 5.
5. Is the content a themantic grouping, possibly containing content that could be arranged in a footer or header? Does this need to be organized in a sectioning element
	5.1 YES: Use <section>
	5.2 NO: Use a heading <h1-6>

NOTE: Different developers will use different tags according to their opinion of which suits best, so it's up to you to decide. 

IMPORTANT: A good guideline is to ensure that your content is described in the most accurate, semantic terms and that you're using the elements consistently across your site or application. 


## Reducing Class and ID Identifiers

One of the benefits of using semantic elements in HTML5 is reducing the need for ID and CLASS attributes to convey meaning. While some developers understand this to mean that you shouldn't be using CLASSES and ID's at all, or just in specific instances, their definition hasn't changed in the official specification, meaning that in fact there's little change.


#### The CLASS Attribute

There are no additional restrictions on the tokens authors can use in the class attribute, but authors are encouraged to use values that describe the nature of the content, rather than values that describe the desired presentation of the content.

#### The ID Attribute:

The value must be unique amongst all the IDs in the element's home subtree and must contain at least one character. The value must not contain any space characters.

An element's unique identifier can be used for a variety of purposes, most notably as a way to link to specific parts of a document using fragment identifiers, as a way to target an element when scripting, and as a way to style a specific element from CSS.


#### Telephone Numbers

This makes the link clickable in mobile devices:
If you have a telephone number: 9555-2222

use:
<a href="tel://9555-2222" title="give us a call">9555-2222</a>


#### The Figure Element

Categories: Flow content.
			Sectioning root.
			Palpable content.

Contexts in which this element can be used: Where flow content is expected.
Content model: Either: One figcaption element followed by flow content.
	Or: Flow content followed by one figcaption element.
	Or: Flow content.
Content attributes: Global attributes

NOTE: Because it is categorized as being part of the Sectioning Root, nothing inside a <figure> element will appear in the document outline.
	
As to what a figure element is allowed to contain, it can contain a <figcaption> element followed by flow content, or flow content followed by a <figcaption> element, or just flow content with no <figcaption>. 

Description from Spec:
The figure element represents some flow content, optionally with a caption, that is self-contained and is typically referenced as a single unit from the main flow of the document.

The element can thus be used to annotate illustrations, diagrams, photos, code listings, etc, that are referred to from the main content of the document, but that could, without affecting the flow of the document, be moved away from that primary content, e.g. to the side of the page, to dedicated pages, or to an appendix.

The figcaption element child of the element, if any, represents the caption of the figure element's contents. If there is no child figcaption element, then there is no caption.


#### The Div Tag

The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.

Authors are strongly encouraged to view the div element as an element of last resort, for when no other element is suitable. Use of more appropriate elements instead of the div element leads to better accessibility for readers and easier maintainability for authors.



#### Lists in HTML5

For the most part, lists remain unchanged from HTML4 to HTML5.

The <ol> and the definition list have changed a little bit


#### The `<ol>` Element:

That start attribute which was deprecated in XHTML is back. The start attribute allows you to change the value of where the list begins it's count.

The reversed attribute is a boolean value, which creates a list that counts backwards. Most browsers still don't support it.

#### The `<dl>` Element:

Previously in HTML4, a definition list was defined as a "list containing a term and one or more definitions for that term". Most authors used it for random stuff.

FROM SPEC: The dl element represents an association list consisting of zero or more name-value groups (a description list). Each group must consist of one or more names (dt elements) followed by one or more values (dd elements). Within a single dl element, there should not be more than one dt element for each name.

Name-value groups may be terms and definitions, metadata topics and values, questions and answers, or any other groups of name-value data.

The values within a group are alternatives; multiple paragraphs forming part of the same value must all be given within the same dd element.

The order of the list of groups, and of the names and values within each group, may be significant.

You can have as many definitions within a term as you like. The inside of the name-value pairs can be anything you want them to be. They can be links, headings, images, <p>, etc

<dl>
	<dt>Medical Professional</dt>
		<dd>Doctor</dd>
		<dd><a href="nurse.html">Nurse</a></dd>
		<dd><img src="images/orderly.jpg" alt="orderly"></dd>
</dl>

#### Bold and Italic:

In XHTML 1.0, <b> and <i> were discouraged, as they were purely stylistic, and instead authors were encouraged to use <em> and <strong> to convey importance. That has changed with HTML5


#### The `<b>` and `<i>` Elements:

The <b> element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.

The <i> element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, a thought, or a ship name in Western texts.

Terms in languages different from the main text should be annotated with lang attributes (or, in XML, lang attributes in the XML namespace).


#### The `<strong>` and `<em>` Elements:

The em element represents stress emphasis of its contents.

So the difference between the <i> and <em> elements is that the <i> element represents an alternate voice or mood being used, whereas the <em> element stresses the emphasis of it's contents.

The <strong> element represents strong importance for its contents.


#### The <cite> Element:

FROM SPEC: The cite element represents the title of a work (e.g. a book, a paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game, a sculpture, a painting, a theatre production, a play, an opera, a musical, an exhibition, a legal case report, etc). This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing.

A person's name is not the title of a work — even if people call that person a piece of work — and the element must therefore not be used to mark up people's names. (In some cases, the b element might be appropriate for names; e.g. in a gossip article where the names of famous people are keywords rendered with a different style to draw attention to them. In other cases, if an element is really needed, the span element can be used.)
e.g.	<p>I just read <cite>Lord of the Rings</cite></p>


#### The <q> Element:

Designed specifically for quotes. Identifies its contents as being a quote from somebody. Most browsers will add quotation marks around the text.
e.g.	<q>These pretzels are making me thirsty</q>


#### The <blockquote> Element:

FROM SPEC:The blockquote element represents a section that is quoted from another source.

Content inside a blockquote must be quoted from another source, whose address, if it has one, may be cited in the cite attribute.

If the cite attribute is present, it must be a valid URL potentially surrounded by spaces.

The content of a blockquote may be abbreviated or may have context added in the conventional manner for the text's language.

e.g.
 
	<blockquote>
	 <p>[Fred] then said he liked [...] fish.</p>
	</blockquote>

e.g. with <blockquote> using <cite>

	<p>His next piece was the aptly named <cite>Sonnet 130</cite>:</p>
	<blockquote cite="http://quotes.example.org/s/sonnet130.html">
	<p>My mistress' eyes are nothing like the sun,<br>
	Coral is far more red, than her lips red,<br>
	</p>
	</blockquote>


#### The `<address>` Element

In HTML4, it was defined as an element that may be used by authors to supply contact information for a document or major part of the document, like a form. 

In HTML5:
Categories: Flow content.
			Palpable content.
Contexts in which this element can be used: Where flow content is expected.
Content model: Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.

The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.

For example, a page at the W3C Web site related to HTML might include the following contact information:

	<ADDRESS>
	 <A href="../People/Raggett/">Dave Raggett</A>,
	 <A href="../People/Arnaud/">Arnaud Le Hors</A>,
	 contact persons for the <A href="Activity">W3C HTML Activity</A>
	</ADDRESS>

The address element must not be used to represent arbitrary addresses (e.g. postal addresses), unless those addresses are in fact the relevant contact information. (The p element is the appropriate element for marking up postal addresses in general.)

The address element must not contain information other than contact information

Typically, the address element would be included along with other information in a footer element.

You can use as many as you need on a page, but you can only have one per <section> or per `<article>`.


#### The `<small>` Element

In HTML4, the <small> element was defined as text that should be displayed in a small font.

In HTML5:

FROM SPEC:The small element represents side comments such as small print.

Small print typically features disclaimers, caveats, legal restrictions, or copyrights. Small print is also sometimes used for attribution, or for satisfying licensing requirements.

The small element does not "de-emphasize" or lower the importance of text emphasized by the em element or marked as important with the strong element. To mark text as not emphasized or important, simply do not mark it up with the em or strong elements respectively.

The small element should not be used for extended spans of text, such as multiple paragraphs, lists, or sections of text. It is only intended for short runs of text. The text of a page listing terms of use, for instance, would not be a suitable candidate for the small element: in such a case, the text is not a side comment, it is the main content of the page.

Good for "fine print" or legal text.

#### The `<mark>` Element

The <mark> element is a brand new element in HTML and is designed to help authors highlight page content usually for reference purposes. 

FROM SPEC: The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.

Another example of the mark element is highlighting parts of a document that are matching some search string. 

#### The `<time>` Element

In the past, there wasn't a consistent way of marking up times and dates. Usually, authors would use classes to indicate time and dates.

FROM SPEC: The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.

The datetime attribute may be present. If present, its value must be a representation of the element's contents in a machine-readable format.

A time element that does not have a datetime content attribute must not have any element descendants.

The datetime value of a time element is the value of the element's datetime content attribute, if it has one, or the element's textContent, if it does not.

The datetime value of a time element must match one of the following syntaxes.
See the spec for more examples! There are heap!

e.g. <time>2011-11-12T14:54Z</time>

e.g. 2	If you want the final content to look like this:
April 25th, 2011 at 12:52

code:

	<time datetime="2011-04-25T12:52:04-08:00">April 25th, 2011 at 12:52</time>

T = time
-08:00 = offset from GMT


#### How to Check What You Offset From GMT Is

1. Go to http://en.wikipedia.org/wiki/Time_zone#Offsets_from_UTC

2. Scroll down and you get to a table, and in the Example Time column (ISO 8601 notation), you have the time written in machine-readable format, so you can just copy and paste it from there.

IMPORTANT: You only need to use the <time> element if you want search engines, aggregators, and applications, and other content readers to be able to understand it.


#### Creating Block Level Links

The <a> element may be wrapped around entire paragraphs, lists, tables, and so forth, even entire sections, so long as there is no interactive content within (e.g. buttons or other links).

So links can wrap around multiple elements - creating block level links.

Most browsers treat the <a> tag as an inline element, so you may need to change its display to block

e.g.

	a {
		display:block;
	}


If you wrap the <a> tag around an entire section (e.g. <section>,<article>,<nav>,<aside>) elements tend to get jumbled up in the DOM. One work-around is to wrap the section in a <div> tag and then apply the <a> around that. Sometimes this works, so test thoroughly.



#### The `<link>` Element

The <link> element helps user agents and applications find and use certain link types as well as locating external resources that the pages need. It also helps you describe the nature of links throughout the site, describing how those pages relate to each other. And that is extremely helpful for search engines. 

List of Allowed Keywords And Their Meanings:
http://dev.w3.org/html5/spec-author-view/links.html#linkTypes

FROM SPEC: The link element allows authors to link their document to other resources.

The destination of the link(s) is given by the href attribute, which must be present and must contain a valid non-empty URL potentially surrounded by spaces.

A link element must have rel attribute.

The types of link indicated (the relationships) are given by the value of the rel attribute, which, if present, must have a value that is a set of space-separated tokens. The allowed keywords and their meanings are defined in a later section.

Two categories of links can be created using the link element: Links to external resources and hyperlinks. The link types section defines whether a particular link type is an external resource or a hyperlink. One link element can create multiple links (of which some might be external resource links and some might be hyperlinks); exactly which and how many links are created depends on the keywords given in the rel attribute. User agents must process the links on a per-link basis, not a per-element basis.

Each link created for a link element is handled separately. For instance, if there are two link elements with rel="stylesheet", they each count as a separate external resource, and each is affected by its own attributes independently. Similarly, if a single link element has a rel attribute with the value next stylesheet, it creates both a hyperlink (for the next keyword) and an external resource link (for the stylesheet keyword), and they are affected by other attributes (such as media or title) differently.

There are many more rel keywords and values that you can use, apart from what is mentioned in the HTML5 spec author view, though not all of these are in use. 

Resource 1:
http://microformats.org/wiki/existing-rel-values#HTML5_link_type_extensions

## Examples of Rel Attributes

<a href="mailto:jeff@bridges.com.au" rel="author">jeff@bridges.com.au</a>
rel="start"
rel="external"
rel="license"


## Dealing with Older Browsers and IE:


Most browsers deal with unknown elements as inline elements. 

So paste the following rule in your CSS file:

/* HTML5 Display Rule */
address, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary {
	display:block;
}


When dealing with ANY version of IE previous to IE9, the browser would insert the element into the DOM as an empty node with no children. The fix is pretty simple. 

Inside <head> tag, add the following:

	<!--[if lt IE 9]>
	<script src="dist/html5shiv.js"></script>
	<![endif]-->


## Extra Resources:

https://developer.mozilla.org/en/html/html5
Webkit.org
dev.opera.com
blog.whatwg.org
html5doctor.com



# CSS

#### What is the difference between 'hidden' and 'display: none'

`display: none;` - tag will not appear on page at all. No space will be allocated between other tags.

`visibility: hidden;` - tag is not visible, but space is allocated for it on the page.

#### What is a CSS pre-processor and how does it work

A CSS preprocessor allows you to use more complex logic like variables, extends, mixins and even loops. The pre-processor then compiles the code into valid css, and may also remove duplicates / dead code, and minify it.

#### What are the dangers of using a CSS pre-processor

* Mixins and extends can hurt maintainability of code, since you have to search for the original styles.
* Handing the project to a developer that uses raw CSS - they may not know LESS/SASS

#### What are floats, and what are the considerations in using them

Make content appear side by side, LTR or RTL.

* Parents of floated elements may collapse
* Need to apply special css with `:after`
* Problematic with email
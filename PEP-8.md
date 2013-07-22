#PEP 8

One of Guido's key insights is that code is read much more often than it is written. The guidelines provided here are intended to improve the readability of code and make it consistent across the wide spectrum of Python code.

Two good reasons to break a particular rule:

1. When applying the rule would make the code less readable, even for someone who is used to reading code that follows the rules.

2. To be consistent with surrounding code that also breaks it (maybe for historic reasons) -- although this is also an opportunity to clean up someone else's mess (in true XP style).

##Indentation

Use 4 spaces per indentation level.

##Tabs or Spaces?

Never mix tabs and spaces. The most popular way of indenting Python is with spaces only. The second-most popular way is with tabs only. Code indented with a mixture of tabs and spaces should be converted to using spaces exclusively.

##Maximum Line Length

Limit all lines to a maximum of 79 characters.

For flowing long blocks of text (docstrings or comments), limiting the length to 72 characters is recommended.

##Blank Lines

Separate top-level function and class definitions with two blank lines.

Method definitions inside a class are separated by a single blank line.

Extra blank lines may be used (sparingly) to separate groups of related functions. Blank lines may be omitted between a bunch of related one-liners (e.g. a set of dummy implementations).

Use blank lines in functions, sparingly, to indicate logical sections.

#Encodings (PEP 263)

Code in the core Python distribution should always use the ASCII or Latin-1 encoding (a.k.a. ISO-8859-1). For Python 3.0 and beyond, UTF-8 is preferred over Latin-1, see PEP 3120.

Imports

Imports should usually be on separate lines, e.g.:

	Yes: import os
     	 import sys

	No:  import sys, os

It's okay to say this though:

	from subprocess import Popen, PIPE

##Whitespace in Expressions and Statements

Avoid extraneous whitespace in the following situations:

Immediately inside parentheses, brackets or braces.

Yes: spam(ham[1], {eggs: 2})
No:  spam( ham[ 1 ], { eggs: 2 } )
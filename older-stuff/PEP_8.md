# Essentials of PEP 8

> A Foolish Consistency is the Hobgoblin of Little Minds

As [Guido](https://twitter.com/gvanrossum) says, code is much more often read than written.

## Guidelines Most Important to Me (biased)
* Use 4 spaces of indentation
* Continuation lines should align
* Spaces are the preferred over tabs for indentation
* All lines must be limited to 79 characters in length
* For code blocks or text blocks (e.g. comments), lines should be limited to 72 characters
* You should avoid needless whitespace immediately inside braces, before commas, semicolons or colons, immediately before the opening brace, immediately before the open brace that starts an indexing or slicing
* You should not have more than one space around an assignment operator just to align it with another. (e.g. good: `x = 5`)
* Compound statements (multiple statements on the same line) are generally discouraged. (e.g. bad: `if foo == 'blah': do_blah_thing()`)
* Use 2 spaces after sentance that ends with a period.
* Block comments generally apply to some (or all) code that follows them, and are indented to the same level as that code. Each line of a block comment starts with a `#` and a single space (unless it is indented text inside the comment).
* Paragraphs inside a block comment are separated by a line containing a single `#`.
* Write docstrings for all public modules, functions, classes, and methods. Docstrings are not necessary for non-public methods, but you should have a comment that describes what the method does. This comment should appear after the `def` line.
* most importantly, the `"""` that ends a multiline docstring should be on a line by itself, and preferably preceded by a blank line.
* For one liner docstrings, it's okay to keep the closing `"""` on the same line.
* Never use the characters 'l' (lowercase letter el), 'O' (uppercase letter oh), or 'I' (uppercase letter eye) as single character variable names.
* Function names should be lowercase, with words separated by underscores as necessary to improve readability.
* Always use `self` for the first argument to instance methods.
* Always use `cls` for the first argument to class methods.
* Use the function naming rules: lowercase with words separated by underscores as necessary to improve readability for method names and instance variables.
* Use one leading underscore only for non-public methods and instance variables.
* To avoid name clashes with subclasses, use two leading underscores to invoke Python's name mangling rules.
* Constants are usually defined on a module level and written in all capital letters with underscores separating words. e.g. `MAX_OVERFLOW` and `TOTAL`.
* If you're not sure whether a class' methods should be public or non-public, choose non-public, as it is easier to make it public afterwards rather than visa versa.
* Modules should explicitly declare the names in their public API using the `__all__` attribute. Setting `__all__` to an empty list indicates that the module has no public API.
* Please read **Programming Recommendations** at the bottom of this document.


## Guidelines of PEP 8

#### Indentation

* Use 4 spaces of indentation
* Continuation lines should align
* The closing brace on a multi-line code block can be placed under the 1st non-whitespace character or it can be placed under the 1st character of the line that starts the code block. 

e.g.

	some_list = [
	    9, 8, 7,
	    6, 5, 4,
	    ]

	some_list = [
	    9, 8, 7,
	    6, 5, 4,
	]

* Spaces are the preferred over tabs for indentation
* All lines must be limited to 79 characters in length
* For code blocks or text blocks (e.g. comments), lines should be limited to 72 characters
* Place line breaks after a binary operator, not before it
* Top level functions and class definitions should be separated with 2 blank lines.
* Inside a class, method definitions should be separated by a single blank line.
* You can use extra blank lines to separate groups of related functions.
* You don't need to place blank lines in between one-line dummy or empty implementations.
* Inside functions, use blank lines to indicate logical separations.
* Code should always use UTF-8 or ASCII, but it should not have an encoding declaration
* For Python 3.0+, all identifiers standard library MUST use ASCII-only identifiers, and SHOULD use English words wherever feasible. String literals and comments must also be in ASCII format.
* Imports should be separated by line breaks, but if using a `from`, you can include multiple imports on the same line. 

e.g.

	import datetime
	import time
	
	from subprocess import Popen, PIPE

* Place imports at the top of a file, after module comments and docstrings, but before module globals and constants.

Group imports in the following order:

1. standard library imports
2. related third party imports
3. local application/library specific imports

.

* Place a blank line between each group of imports.
* Put any relevant `__all__` specification after the imports.
* It's prefered to use absolute imports (e.g. `import django.shortcuts`) because they are more readable and give better error messages.
* An acceptable alternative to absolute imports are explicit relative imports (e.g. `from . import sibling`)
* Standard library code should avoid complex package layouts and always use absolute imports.
* You should never use implicit relative imports. They have been removed from Python 3.
* You should avoid wildcard imports (e.g. `from some_module import *`)
* You should avoid needless whitespace immediately inside braces, before commas, semicolons or colons, immediately before the opening brace, immediately before the open brace that starts an indexing or slicing
* You should not have more than one space around an assignment operator just to align it with another. (e.g. good: `x = 5`)
* Always surround these binary operators with a single space on either side: assignment `=`, augmented assignment (`+=`, `-=` etc.), comparisons (`==`, `<`, `>`, `!=`, `<>`, `<=`, `>=`, `in`, `not in`, `is`, `is not`), Booleans (`and`, `or`, `not`).
* Don't use spaces around the `=` sign when used to indicate a keyword argument or a default parameter value. e.g. (`def foo(speed, height=0):`)
* Compound statements (multiple statements on the same line) are generally discouraged. (e.g. bad: `if foo == 'blah': do_blah_thing()`)
* Comments that contradict the code are worse than no comments. Always make a priority of keeping the comments up-to-date when the code changes!
* Comments should be complete sentences. If a comment is a phrase or sentence, its first word should be capitalized, unless it is an identifier that begins with a lower case letter (never alter the case of identifiers!).
* If it's a long or multi-line comment, make sure you end it with a period.
* Use 2 spaces after sentance that ends with a period.
* Comments should be in English.
* Block comments generally apply to some (or all) code that follows them, and are indented to the same level as that code. Each line of a block comment starts with a `#` and a single space (unless it is indented text inside the comment).
* Paragraphs inside a block comment are separated by a line containing a single `#`.
* An inline comment is a comment on the same line as a statement. Inline comments should be separated by at least two spaces from the statement. They should start with a `#` and a single space.
* Don't use inline comments if they state the obvious.

#### Docstrings
* Write docstrings for all public modules, functions, classes, and methods. Docstrings are not necessary for non-public methods, but you should have a comment that describes what the method does. This comment should appear after the `def` line.
* most importantly, the `"""` that ends a multiline docstring should be on a line by itself, and preferably preceded by a blank line.
* For one liner docstrings, it's okay to keep the closing `"""` on the same line.

#### Version Bookkeeping
If you have to have Subversion, CVS, or RCS crud in your source file, do it as follows.

	__version__ = "$Revision: 1a40d4eaa00b $"
	# $Source$

* These lines should be included after the module's docstring, before any other code, separated by a blank line above and below.

#### Naming Conventions

* When using abbreviations in CapWords, capitalize all the letters of the abbreviation. Thus `HTTPServerError` is better than `HttpServerError`.
* `_single_leading_underscore`: weak "internal use" indicator. E.g. `from M import *` does not import objects whose name starts with an underscore.
* `single_trailing_underscore_`: used by convention to avoid conflicts with Python keyword, e.g.  `Tkinter.Toplevel(master, class_='ClassName'`)
* `__double_leading_underscore`: when naming a class attribute, invokes name mangling (inside class FooBar, `__boo` becomes `_FooBar__boo`.
* `__double_leading_and_trailing_underscore__`: "magic" objects or attributes that live in user-controlled namespaces. E.g. `__init__`, `__import__` or `__file__`. Never invent such names; only use them as documented.
* Never use the characters 'l' (lowercase letter el), 'O' (uppercase letter oh), or 'I' (uppercase letter eye) as single character variable names.
* Modules should have short, all-lowercase names. Underscores can be used in the module name if it improves readability. Python packages should also have short, all-lowercase names, although the use of underscores is discouraged.
* Class names should normally use the `CapWords` convention.
* Because exceptions should be classes, the class naming convention applies here. However, you should use the suffix "Error" on your exception names (if the exception actually is an error).
* The convention for global variable names are the same as those for functions.
* Modules that are designed for use via `from M import *` should use the `__all__` mechanism to prevent exporting globals, or use the older convention of prefixing such globals with an underscore

#### Important Naming and Argument Conventions

* Function names should be lowercase, with words separated by underscores as necessary to improve readability.
* Always use `self` for the first argument to instance methods.
* Always use `cls` for the first argument to class methods.
* Use the function naming rules: lowercase with words separated by underscores as necessary to improve readability for method names and instance variables.
* Use one leading underscore only for non-public methods and instance variables.
* To avoid name clashes with subclasses, use two leading underscores to invoke Python's name mangling rules.
* Constants are usually defined on a module level and written in all capital letters with underscores separating words. e.g. `MAX_OVERFLOW` and `TOTAL`.

#### Inheritance
* If you're not sure whether a class' methods should be public or non-public, choose non-public, as it is easier to make it public afterwards rather than visa versa.
* Public attributes should have no leading underscores.
* If your public attribute name collides with a reserved keyword, append a single trailing underscore to your attribute name.
* For simple public data attributes, it is best to expose just the attribute name, without complicated accessor/mutator methods.
* If your class is intended to be subclassed, and you have attributes that you do not want subclasses to use, consider naming them with double leading underscores and no trailing underscores.
* Not everyone likes name mangling. Try to balance the need to avoid accidental name clashes with potential use by advanced callers.

#### Public and Internal Interfaces
* Modules should explicitly declare the names in their public API using the `__all__` attribute. Setting `__all__` to an empty list indicates that the module has no public API.
* Even with `__all__` set appropriately, internal interfaces (packages, modules, classes, functions, attributes or other names) should still be prefixed with a single leading underscore.
* An interface is also considered internal if any containing namespace (package, module or class) is considered internal.

#### Programming Recommendations

* Code should be written in a way that does not disadvantage other implementations of Python (PyPy, Jython, IronPython, Cython, Psyco, and such).
* Comparisons to singletons like `None` should always be done with `is` or `is not`, never the equality operators.
* Also, beware of writing `if x` when you really mean `if x is not None`.
* When implementing ordering operations with rich comparisons, it is best to implement all six operations (`__eq__`, `__ne__`, `__lt__`, `__le__`, `__gt__`, `__ge__`) rather than relying on other code to only exercise a particular comparison.
* To minimize the effort involved, the `functools.total_ordering()` decorator provides a tool to generate missing comparison methods.
* Always use a def statement instead of an assignment statement that binds a lambda expression directly to a name. (good: `def f(x): return 2*x` bad: `f = lambda x: 2*x`).
* Derive exceptions from `Exception` rather than `BaseException`.
* Design exception hierarchies based on the distinctions that code catching the exceptions is likely to need, rather than the locations where the exceptions are raised.
* When raising an exception in Python 2, use raise `ValueError('message')` instead of the older form `raise ValueError, 'message'`.
* When catching exceptions, mention specific exceptions whenever possible instead of using a bare `except:` clause.
* For all `try`/`except` clauses, limit the `try` clause to the absolute minimum amount of code necessary. Again, this avoids masking bugs.
* When a resource is local to a particular section of code, use a `with` statement to ensure it is cleaned up promptly and reliably after use. A `try`/`finally` statement is also acceptable.
* Use string methods instead of the string module.
* Use `''.startswith()` and `''.endswith()` instead of string slicing to check for prefixes or suffixes. (e.g. `if foo.startswith('bar'):`)
* Object type comparisons should always use `isinstance()` instead of comparing types directly. (e.g. good: `if isinstance(obj, int):` bad: `if type(obj) is type(1):`)
* For sequences, (strings, lists, tuples), use the fact that empty sequences are false. 

.

	Yes: if not seq:
	     if seq:
	
	No: if len(seq)
	    if not len(seq)

* Don't compare boolean values to `True` or `False` using `==`. (e.g. good: `if greeting:` bad: `if greeting == True` worse: `if greeting is True:`)






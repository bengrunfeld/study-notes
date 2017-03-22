# Docstrings

#### What is a Docstring?

A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition. Such a docstring becomes the `__doc__` special attribute of that object.

All modules should normally have docstrings, and all functions and classes exported by a module should also have docstrings. Public methods (including the `__init__` constructor) should also have docstrings. A package may be documented in the module docstring of the `__init__`.py file in the package directory.

#### Other Types of Docstrings

There are 2 other types of Docstrings:

1. String literals occurring immediately after a simple assignment at the top level of a module, class, or `__init__` method are called "attribute docstrings".

2. String literals occurring immediately after another docstring are called "additional docstrings".

#### Syntax

For consistency, always use `"""triple double quotes"""` around docstrings. Use `r"""raw triple double quotes"""` if you use any backslashes in your docstrings. For Unicode docstrings, use `u"""Unicode triple-quoted strings"""`.

#### Types of Docstrings

There are two forms of docstrings: one-liners and multi-line docstrings.

1. One-liner Docstrings - for really simple explanations.

These prescribe the function or method's effect as a command ("Do this", "Return that"), not as a description; e.g. don't write "Returns the pathname ...".

The one-line docstring should NOT be a "signature" reiterating the function/method parameters

2. Multi-line Docstrings

Multi-line docstrings consist of a summary line just like a one-line docstring, followed by a blank line, followed by a more elaborate description.

The summary line may be used by automatic indexing tools; it is important that it fits on one line and is separated from the rest of the docstring by a blank line. The summary line may be on the same line as the opening quotes or on the next line. The entire docstring is indented the same as the quotes at its first line.

Insert a blank line before and after all docstrings (one-line or multi-line) that document a class -- generally speaking, the class's methods are separated from each other by a single blank line, and the docstring needs to be offset from the first method by a blank line; for symmetry, put a blank line between the class header and the docstring. Docstrings documenting functions or methods generally don't have this requirement.

#### Script Docstrings

The docstring of a script (a stand-alone program) should be usable as its "usage" message, printed when the script is invoked with incorrect or missing arguments (or perhaps with a "-h" option, for "help"). Such a docstring should document the script's function and command line syntax, environment variables, and files.

#### Module Docstrings

The docstring for a module should generally list the classes, exceptions and functions (and any other objects) that are exported by the module, with a one-line summary of each. (These summaries generally give less detail than the summary line in the object's docstring.) 

#### Package Docstrings

The docstring for a package (i.e., the docstring of the package's `__init__.py` module) should also list the modules and subpackages exported by the package.

#### Function Docstrings

The docstring for a function or method should summarize its behavior and document its arguments, return value(s), side effects, exceptions raised, and restrictions on when it can be called (all if applicable). Optional arguments should be indicated. It should be documented whether keyword arguments are part of the interface.

#### Class Docstrings

The docstring for a class should summarize its behavior and list the public methods and instance variables. If the class is intended to be subclassed, and has an additional interface for subclasses, this interface should be listed separately (in the docstring). The class constructor should be documented in the docstring for its `__init__` method. Individual methods should be documented by their own docstring.

#### Subclass Docstrings

If a class subclasses another class and its behavior is mostly inherited from that class, its docstring should mention this and summarize the differences. Use the verb "override" to indicate that a subclass method replaces a superclass method and does not call the superclass method; use the verb "extend" to indicate that a subclass method calls the superclass method (in addition to its own behavior).

#### Recommendation From The BDFL

The BDFL recommends inserting a blank line between the last paragraph in a multi-line docstring and its closing quotes, placing the closing quotes on a line by themselves.

#### Docstring Indentation

Any indentation in the first line of the docstring (i.e., up to the first newline) is insignificant and removed by automatic documentation tools. Relative indentation of later lines in the docstring is retained. Blank lines should be removed from the beginning and end of the docstring.






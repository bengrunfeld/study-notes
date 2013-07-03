#Python

To start Python from the shell, simply type `python`

A second way of starting the interpreter is `python -c command [arg] …`

Python modules can be invoked with `python -m module [arg] ...`

To run a script file and then go into the interactive mode, use the `-i` option

##Quitting 

To quit Python, use `quit()` or `Ctl-d`.

##Interactive Mode

When you type `python` into the terminal, you go into interactive mode, where you can type in code and have it execute in front of you.

`>>>` is the primary prompt, and means you need to type something

`...` is the secondary prompt, and means you are in a multi-line command.

A secondary prompt on a line by itself in an example means you must type a blank line; this is used to end a multi-line command.

##Executable Scripts
On BSD’ish Unix systems, Python scripts can be made directly executable, like shell scripts, by putting the line

	#! /usr/bin/env python

at the beginning of the script and giving the file an executable mode. The `#!` must be the first two characters of the file. On some platforms, this first line must end with a Unix-style line ending `('\n')`

The script can be given an executable mode, or permission, using the chmod command:

	chmod +x myscript.py

##Comments

The hash, or pound, character, `#`, is used to start a comment in Python.

##Special Encoding

Place `# -*- coding: encoding -*-`after the `#!` line (above) to instruct Python to use special encoding.

With that declaration, all characters in the source file will be treated as having the encoding.

E.g.

	# -*- coding: iso-8859-15 -*-

	currency = u"€"
	print ord(currency)

By using `UTF-8` (either through the signature or an encoding declaration), characters of most languages in the world can be used simultaneously in string literals and comments.

##Customizing Python

By setting an environment variable named `PYTHONSTARTUP` to the name of a file containing your start-up commands, you can customize the interactive mode of Python. This is similar to the `.profile` feature of the Unix shells.

To customize every invocation of Python, there are two hooks that you can use to perform global customizations: `sitecustomize` and `usercustomize`.

Read up about it in `2.2.5` for more information. 

##Using Python as a Calculator

The interpreter acts as a simple calculator: you can type an expression at it and it will write the value.

	python
	>>>2 + 2
	4

##Initializing Variables

The equal sign `=` is used to assign a value to a variable.

	>>> ben = 33
	>>> mari = 24
	>>> ben - mari
	9

A value can be assigned to several variables simultaneously:

	>>> x = y = z = 0  # Zero x, y and z

Multiple variables can be initialized on the same line with different values:

	a, b = 0, 1

To print out the value of a variable, simply type its name

	>>>ben
	33

##Converting a number to a float, int, or long

	>>> a = 1
	>>> b = 2
	>>> c = 3
	>>> float(a)
	1.0
	>>> int(b)
	2
	>>> long(c)
	3L

##The `_` Variable

In interactive mode, the last printed expression is assigned to the variable `_`. Especially useful when using Python as a calculator.

	>>> ben + _
	36L

This variable should be treated as read-only by the user. Don’t explicitly assign a value to it.

##Strings

Strings can be enclosed in single or double quotes. You must escape any special characters.

	>>> "hello there"
	'hello there'
	>>> 'hello there'
	'hello there'
	>>> "'hello', he said"
	"'hello', he said"
	>>> 'don\'t do that!'
	"don't do that!"

String literals can span multiple lines in several ways. Continuation lines can be used, with a backslash as the last character on the line indicating that the next line is a logical continuation of the line:

	>>> question = "What are you doing today?\n\
	... What time is it?\n\
	... How do you feel?"
	>>> print question
	What are you doing today?
	What time is it?
	How do you feel?

Or, strings can be surrounded in a pair of matching triple-quotes: `"""` or `'''`. End of lines do not need to be escaped when using triple-quotes, but they will be included in the string.

	>>> print """
	... Hello there
	...     Mr X.
	...     Your hat is on crooked
	... """
	
	Hello there
		Mr X.
		Your hat is on crooked

To make a string where special characters are printed as is (i.e. a `raw` string), use:

	>>> greeting = r"Hello there you\n\
	... interesting person."
	>>> print greeting
	Hello there you\n\
	interesting person.

Strings can be concatenated (glued together) with the `+` operator, and repeated with `*`:

	>>> bad = 'Hep' + 'A'
	>>> bad
	'HepA'
	>>> 'Don\'t get' + bad*5 + ' ever.'
	"Don't getHepAHepAHepAHepAHepA ever."

Two string literals next to each other are automatically concatenated; the first line above could also have been written `bad = 'Hep' 'A';`

Strings can be subscripted (indexed); like in C, the first character of a string has subscript (index) `0`.

Substrings can be specified with the slice notation: two indices separated by a colon.

	>>> bad[3]
	'A'
	>>> bad[0:2]
	'He'
	>>> bad[2:4]
	'pA'

With slices, an omitted first index defaults to zero, an omitted second index defaults to the size of the string being sliced.

Python strings cannot be changed. Assigning to an indexed position in the string results in an error:

	bad[2] = 'M'		#Error!

But you can create a new string by concatenating input with an old string:

	>>> 'M' + bad
	'MHepC' 
	>>> bad[3] + 'd'
	'Cd'
	>>> bad[2:] + bad[2:]
	'pCpC'

Indicies can be negative numbers

	>>> word[-1]     # The last character
	'A'
	>>> word[-2]     # The last-but-one character
	'p'
	>>> word[-2:]    # The last two characters
	'pA'
	>>> word[:-2]    # Everything except the last two characters
	'Hel'

The built-in function `len()` returns the length of a string:

	>>> meep = 'meeeeeeeeeeeeeeeeeeeeeeeeeeeeep'
	>>> len(meep)
	31

String methods - `http://docs.python.org/2/library/stdtypes.html#string-methods`

##The Unicode Object

Starting with Python 2.0 a new data type for storing text data is available to the programmer: the Unicode object. It can be used to store and manipulate Unicode data.

Creating Unicode strings in Python is just as simple as creating normal strings:

	>>> u'Hello World !'
	u'Hello World !'

The small `u` in front of the quote indicates that a Unicode string is supposed to be created.

If you want to include special characters in the string, you can do so by using the Python Unicode-Escape encoding. The following example shows how:

	>>> u'Hello\u0020World !'
	u'Hello World !'

The built-in function `unicode()` provides access to all registered Unicode codecs (COders and DECoders). Some of the more well known encodings which these codecs can convert are Latin-1, ASCII, UTF-8, and UTF-16.

When a Unicode string is printed, written to a file, or converted with str(), conversion takes place using this default encoding.

	>>> u"abc"
	u'abc'
	>>> str(u"abc")
	'abc'

To convert a Unicode string into an 8-bit string using a specific encoding, Unicode objects provide an encode() method that takes one argument, the name of the encoding. Lowercase names for encodings are preferred.

	>>> u"äöü".encode('utf-8')
	'\xc3\xa4\xc3\xb6\xc3\xbc'

##Lists

Lists are a data type that is used to group together other values. Lists can be written as a list of comma-separated values (items) between square brackets. List items need not all have the same type.

	>>> a = ['spam', 'eggs', 100, 1234]
	>>> a
	['spam', 'eggs', 100, 1234]

Like string indices, list indices start at 0, and lists can be sliced, concatenated and so on:

	>>> a[0]
	'spam'
	>>> a[3]
	1234
	>>> a[-2]
	100
	>>> a[1:-1]
	['eggs', 100]

All slice operations return a new list containing the requested elements. This means that the following slice returns a shallow copy of the list a:

	>>> a[:]
	['spam', 'eggs', 100, 1234]

Unlike strings, which are immutable, it is possible to change individual elements of a list.

Assignment to slices is also possible, and this can even change the size of the list or clear it entirely:

	>>> # Replace some items:
	... a[0:2] = [1, 12]
	>>> a
	[1, 12, 123, 1234]
	>>> # Remove some:
	... a[0:2] = []
	[123, 1234]

The built-in function len() also applies to lists:
	
	len(a)


##The `WHILE` Loop

	>>> while b < 10:
	...     print b
	...     a, b = b, a+b

The body of the loop is indented: indentation is Python’s way of grouping statements. At the interactive prompt, you have to type a tab or space(s) for each indented line.

Each line within a basic block must be indented by the same amount.

When a compound statement is entered interactively, it must be followed by a blank line to indicate completion.

	>>> i = 256*256
	>>> print 'The value of i is', i
	The value of i is 65536

A trailing comma avoids the newline after the output:

Note that the interpreter inserts a newline before it prints the next prompt if the last line was not completed.

##`IF` Statements

	>>> x = int(raw_input("Please enter an integer: "))
	Please enter an integer: 42
	>>> if x < 0:
	...      x = 0
	...      print 'Negative changed to zero'
	... elif x == 0:
	...      print 'Zero'
	... else:
	...      print 'More'
	...
	More

There can be zero or more `elif` parts, and the `else` part is optional.

##`FOR` Statements

The for statement in Python differs a bit from what you may be used to in `C`
Rather than always iterating over an arithmetic progression of numbers (like in Pascal), or giving the user the ability to define both the iteration step and halting condition (as C), Python’s for statement iterates over the items of any sequence (a list or a string), in the order that they appear in the sequence. E.g:

	>>> # Measure some strings:
	... words = ['cat', 'window', 'defenestrate']
	>>> for w in words:
	...     print w, len(w)
	...
	cat 3
	window 6
	defenestrate 12

If you need to modify the sequence you are iterating over while inside the loop (for example to duplicate selected items), it is recommended that you first make a copy. Iterating over a sequence does not implicitly make a copy. The slice notation makes this especially convenient:

	>>> for w in words[:]:  # Loop over a slice copy of the entire list.
	...     if len(w) > 6:
	...         words.insert(0, w)
	...
	>>> words
	['defenestrate', 'cat', 'window', 'defenestrate']


##The `RANGE` Statement

If you do need to iterate over a sequence of numbers, the built-in function range() comes in handy. It generates lists containing arithmetic progressions:

	>>> range(10)
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

The given end point is never part of the generated list; range(10) generates a list of 10 values, the legal indices for items of a sequence of length 10. It is possible to let the range start at another number, or to specify a different increment (even negative; sometimes this is called the ‘step’):

	>>> range(5, 10)
	[5, 6, 7, 8, 9]
	>>> range(0, 10, 3)
	[0, 3, 6, 9]
	>>> range(-10, -100, -30)
	[-10, -40, -70]

To iterate over the indices of a sequence, you can combine range() and len() as follows:

	>>> a = ['Mary', 'had', 'a', 'little', 'lamb']
	>>> for i in range(len(a)):
	...     print i, a[i]
	...
	0 Mary
	1 had
	2 a
	3 little
	4 lamb



==================

I'm at: 

	http://docs.python.org/2/tutorial/controlflow.html#the-range-function

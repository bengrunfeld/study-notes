#The Python Standard Library

The os module provides dozens of functions for interacting with the operating system:	import os
	dir(os)Be sure to use the `import os` style instead of `from os import *`. This will keep `os.open()` from shadowing the built-in `open()` function which operates much differently.
The built-in `dir()` and `help()` functions are useful as interactive aids for working with large modules like os:
For daily file and directory management tasks, the shutil module provides a higher level interface that is easier to use:	>>> import shutil
The glob module provides a function for making file lists from directory wildcard searches:	>>> import glob
##Command Line Arguments
Common utility scripts often need to process command line arguments. These arguments are stored in the sys module’s argv attribute as a list. For instance the following output results from running python demo.py one two threeatthecommandline:	>>> import sys
##Error Output Redirection and Program TerminationThe sys module also has attributes for stdin, stdout, and stderr. The latter is useful for emitting warnings and error messages to make them visible even when stdout has been redirected.

##String Pattern Matching
The re module provides regular expression tools for advanced string processing. For complex matching and manipu- lation, regular expressions offer succinct, optimized solutions:	>>> import re
##Math
The `math` module gives access to the underlying C library functions for floating point math.
##Internet AccessThere are a number of modules for accessing the internet and processing internet protocols. Two of the simplest are urllib2 for retrieving data from URLs and smtplib for sending mail:	>>> import urllib2
	>>> import smtplib
##Dates and Times
The datetime module supplies classes for manipulating dates and times in both simple and complex ways. While date and time arithmetic is supported, the focus of the implementation is on efficient member extraction for output formatting and manipulation. The module also supports objects that are timezone aware.
	>>> from datetime import date
##Data Compression
Common data archiving and compression formats are directly supported by modules including: zlib, gzip, bz2, zipfile and tarfile.	>>> import zlib	
##Performance Measurement
Some Python users develop a deep interest in knowing the relative performance of different approaches to the same problem. Python provides a measurement tool that answers those questions immediately.
	>>> from timeit import Timer
##Quality Control
One approach for developing high quality software is to write tests for each function as it is developed and to run those tests frequently during the development process.The `doctest` module provides a tool for scanning a module and validating tests embedded in a program’s docstrings.
	import doctest	doctest.testmod() # automatically validate the embedded tests
The unittest module is not as effortless as the doctest module, but it allows a more comprehensive set of tests to be maintained in a separate file:	import unittest
##Other Libraries
* The xmlrpclib and SimpleXMLRPCServer modules make implementing remote procedure calls into an almost trivial task. Despite the modules names, no direct knowledge or handling of XML is needed.* The email package is a library for managing email messages, including MIME and other RFC 2822-based message documents. Unlike smtplib and poplib which actually send and receive messages, the email package has a complete toolset for building or decoding complex message structures (including attachments) and for implementing internet encoding and header protocols.* The xml.dom and xml.sax packages provide robust support for parsing this popular data interchange format. Likewise, the csv module supports direct reads and writes in a common database format. Together, these modules and packages greatly simplify data interchange between Python applications and other tools.* Internationalization is supported by a number of modules including gettext, locale, and the codecs package.
##Weak ReferencesPython does automatic memory management (reference counting for most objects and garbage collection to eliminate cycles). The memory is freed shortly after the last reference to it has been eliminated.
##Decimal Floating Point ArithmeticThe decimal module offers a Decimal datatype for decimal floating point arithmetic.
Compared to the built-in float implementation of binary floating point, the class is especially helpful for* financial applications and other uses which require exact decimal representation,* control over precision,* control over rounding to meet legal or regulatory requirements,* tracking of significant decimal places, or* applications where the user expects the results to match calculations done by hand.
.

`from decimal import *`


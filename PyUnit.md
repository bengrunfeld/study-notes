# UnitTest – Python Unit testing framework

copied from: [http://docs.python.org/2.7/library/unittest.html#module-unittest](http://docs.python.org/2.7/library/unittest.html#module-unittest)

`unittest` supports test automation, sharing of setup and shutdown code for tests, aggregation of tests into collections, and independence of the tests from the reporting framework.

To achieve this, unittest supports some important concepts:

### Test Fixture
A test fixture represents the preparation needed to perform one or more tests, and any associate cleanup actions. This may involve, for example, creating temporary or proxy databases, directories, or starting a server process.

### Test Case
A test case is the smallest unit of testing. It checks for a specific response to a particular set of inputs. unittest provides a base class, `TestCase`, which may be used to create new test cases.

### Test Suite
A test suite is a collection of test cases, test suites, or both. It is used to aggregate tests that should be executed together.

### Test Runner
A test runner is a component which orchestrates the execution of tests and provides the outcome to the user. The runner may use a graphical interface, a textual interface, or return a special value to indicate the results of executing the tests.


The **test case** and **test fixture** concepts are supported through the `TestCase` and `FunctionTestCase` classes; the former should be used when creating new tests, and the latter can be used when integrating existing test code with a unittest-driven framework.

When building test fixtures using `TestCase`, the `setUp()` and `tearDown()` methods can be overridden to provide initialization and cleanup for the fixture. With `FunctionTestCase`, existing functions can be passed to the constructor for these purposes

When the test is run, the fixture initialization is run first; if it succeeds, the cleanup method is run after the test has been executed, regardless of the outcome of the test.

Each instance of the `TestCase` will only be used to run a single test method, so a new fixture is created for each test.

A test runner is an object that provides a single method, `run()`, which accepts a `TestCase` or `TestSuite` object as a parameter, and returns a result object.

The class `TestResult` is provided for use as the result object.

A testcase is created by subclassing `unittest.TestCase`.

Prefix method names with the letters `test_`. This naming convention informs the test runner about which methods represent tests.

* `assertEqual()` to check for an expected result; 
* `assertTrue()` to verify a condition 
* `assertRaises()` to verify that an expected exception gets raised. 

These methods are used instead of the assert statement so the test runner can accumulate all test results and produce a report.

When a `setUp()` method is defined, the test runner will run that method prior to each test. Likewise, if a `tearDown()` method is defined, the test runner will invoke that method after each test.

	if __name__ == '__main__':
		unittest.main()

 unittest.main() provides a command-line interface to the test script. When run from the command line, the above script produces an output that looks like this:

	...
	----------------------------------------------------------------------
	Ran 3 tests in 0.000s
	
	OK

Instead of `unittest.main()`, there are other ways to run the tests with a finer level of control, less terse output, and no requirement to be run from the command line. For example, the last two lines may be replaced with:

	suite = unittest.TestLoader().loadTestsFromTestCase(TestSequenceFunctions)
	unittest.TextTestRunner(verbosity=2).run(suite)

Running the revised script from the interpreter or another script produces the following output:

	test_choice (__main__.TestSequenceFunctions) ... ok
	test_sample (__main__.TestSequenceFunctions) ... ok
	test_shuffle (__main__.TestSequenceFunctions) ... ok
	
	----------------------------------------------------------------------
	Ran 3 tests in 0.110s
	
	OK

If `setUp()` succeeds, the `tearDown()` method will be run whether `runTest()` succeeded or not.

When creating an instance we must specify the test method it is to run. We do this by passing the method name in the constructor:

	defaultSizeTestCase = WidgetTestCase('test_default_size')
	resizeTestCase = WidgetTestCase('test_resize')

## Using Test Suites

Test case instances are grouped together according to the features they test. `unittest` provides a mechanism for this: the test suite, represented by unittest‘s `TestSuite` class:

	widgetTestSuite = unittest.TestSuite()
	widgetTestSuite.addTest(WidgetTestCase('test_default_size'))
	widgetTestSuite.addTest(WidgetTestCase('test_resize'))

For the ease of running tests, as we will see later, it is a good idea to provide in each test module a callable object that returns a pre-built test suite:

	def suite():
	    suite = unittest.TestSuite()
	    suite.addTest(WidgetTestCase('test_default_size'))
	    suite.addTest(WidgetTestCase('test_resize'))
	    return suite

Since it is a common pattern to create a `TestCase` subclass with many similarly named test functions, unittest provides a `TestLoader` class that can be used to automate the process of creating a test suite and populating it with individual tests. For example,

	defaultSizeTestCase = WidgetTestCase('test_default_size')
	resizeTestCase = WidgetTestCase('test_resize')

	suite = unittest.TestLoader().loadTestsFromTestCase(WidgetTestCase)

will create a test suite that will run `WidgetTestCase.test_default_size()` and `WidgetTestCase.test_resize`. TestLoader uses the `test` method name prefix to identify test methods automatically.

Often it is desirable to group suites of test cases together, so as to run tests for the whole system at once. This is easy, since TestSuite instances can be added to a TestSuite just as TestCase instances can be added to a TestSuite:

	suite1 = module1.TheTestSuite()
	suite2 = module2.TheTestSuite()
	alltests = unittest.TestSuite([suite1, suite2])

## External Modules

You can place the definitions of test cases and test suites in the same modules as the code they are to test (such as `widget.py`), but there are several advantages to placing the test code in a separate module, such as `test_widget.py`:

* The test module can be run standalone from the command line.
* The test code can more easily be separated from shipped code.
* There is less temptation to change test code to fit the code it tests without a good reason.
* Test code should be modified much less frequently than the code it tests.
* Tested code can be refactored more easily.
* Tests for modules written in C must be in separate modules anyway, so why not be consistent?
* If the testing strategy changes, there is no need to change the source code.

## Skipping

Unittest supports skipping individual test methods and even whole classes of tests. In addition, it supports marking a test as a “expected failure,” a test that is broken and will fail, but shouldn’t be counted as a failure on a TestResult.

Skipping a test is simply a matter of using the skip() decorator or one of its conditional variants.

## Expected Failures

Expected failures use the `expectedFailure()` decorator.

	class ExpectedFailureTestCase(unittest.TestCase):
	    @unittest.expectedFailure
	    def test_fail(self):
	        self.assertEqual(1, 0, "broken")

## The TestCase Class

The TestCase class provides a number of methods to check for and report failures, such as:

Method	|	Checks that	|	New in
--------|--------------|--------
`assertEqual(a, b)`	|	a == b	 |
`assertNotEqual(a, b)` |	a != b	 |
`assertTrue(x)`	| bool(x) is True |
`assertFalse(x)`	| bool(x) is False |
`assertIs(a, b)`	| a is b |	2.7 
`assertIsNot(a, b)`	| a is not b | 2.7 
`assertIsNone(x)`	| x is None	| 2.7
`assertIsNotNone(x)`	 | x is not None | 2.7
`assertIn(a, b)` |	a in b |	2.7 
`assertNotIn(a, b)`	| a not in b	| 2.7
`assertIsInstance(a, b)`	| isinstance(a, b) | 2.7
`assertNotIsInstance(a, b)`	| not isinstance(a, b) | 2.7

It is also possible to check that exceptions and warnings are raised using the following methods:

Method	| Checks that |	New in
--------|-------------|-------
`assertRaises(exc, func, *args, **kwds)` | `fun(*args, **kwds)` raises exc |	 
`assertRaisesRegexp(exc, r, func, *args, **kwds)` |`fun(*args, **kwds)`  raises exc and the message matches regex r | 	2.7


# Unit Testing

It's easy to write bad unit tests, and they can wreak havok on your project by causing the creation of legacy test and production code, causing bugs to be pushed to production, and wasting immense amounts of valuable development time in the case of a lack of orthogonality (tight coupling and unwanted side-effects).

That said, good unit tests help us write better units of code. 

## Philosophy

Unit tests have very little, if nothing at all, to do with finding bugs or regressions. 

Unit test examine each unit of your code seperately, but when you app runs for real, it's all a lot more complex, and unit tests simply can't replicate this complexity effectively.

If you’re trying to find bugs, it’s far more effective to actually run the whole application together as it will run in production, just like you naturally do when testing manually.

Goal:

* Finding bugs - manual testing or automated integration tests
* Detecting regressions (things that use to work but have unexpectedly stopped working) - Automated integration tests, and sometimes manual testing
* Designing software components - unit testing (TDD)

### Unit Testing for Refactoring

There’s one exception where unit tests do effectively detect bugs. It’s when you’re refactoring, i.e., restructuring a unit’s code but without meaning to change its behaviour. In this case, unit tests can often tell you if the unit’s behaviour has changed.

### Why should we Unit Test

* It documents the intended behaviour of our code

### Why TDD

* It's harder to write unit tests after we write the code
* It's like cooking a dish and then trying to figure out what ingredients are in it

### TDD

* Only write code that the test requires

## Good Unit Tests vs Bad Ones

1. True Unit Tests - only test a single component
2. Dirty Hybrids - a mix of 1 and 3 - these cause havok
3. Integration Tests - automate the entire system to detect regressions

Good tests are either 1 or 3, not 2.

Unit tests created through the TDD process are 1. They contain a lot of knowledge about the behaviour of a single unit of code. If that unit’s behaviour changes, so must its unit tests, and vice-versa. But they don’t contain any knowledge or assumptions about other parts of your codebase, so changes to other parts of your codebase don’t make them start failing.

At the other end of the scale, integration tests contain no knowledge about how your codebase is broken down into units, but instead make statements about how the whole system behaves towards an external user. They’re reasonably cheap to maintain (because no matter how you restructure the internal workings of your system, it needn’t affect an external observer) and they prove a great deal about what features are actually working today.

Anywhere in between (2) and it’s unclear what assumptions you’re making and what you’re trying to prove.

## Rules for Writing Good Unit Tests

> Orthogonal: In computer programming, orthogonality means that operations change just one thing without affecting others.

* Make each tests Orthogonal and independant to all others.

* Any given behaviour should be specified in one and only one test. Otherwise if you later change that behaviour, you’ll have to change multiple tests.

* Don’t make unnecessary assertions. Which specific behaviour are you testing? It’s counterproductive to `assert()` anything that’s also asserted by another test: it just increases the frequency of pointless failures without improving unit test coverage one bit. Have only one logical assertion per test.

* Unit tests are a design specification of how a certain behaviour should work, not a list of observations of everything the code happens to do.

* Test only one code unit at a time. You must test units of code independently, not all chained together. Otherwise, you have lots of overlap between tests, so changes to one unit can cascade outwards and cause failures everywhere. 

* Use mocks intelligently. You’ve definitely taken a wrong turn if you have to run your tests in a specific order, or if they only work when your database or network connection is active. 

* Avoid unnecessary preconditions. Avoid having common setup code that runs at the beginning of lots of unrelated tests. Otherwise, it’s unclear what assumptions each test relies on, and indicates that you’re not testing just a single unit. 

* Don’t unit-test configuration settings **By definition, your configuration settings aren’t part of any unit of code (that’s why you extracted the setting out of your unit’s code). It merely forces you to specify the same configuration in an additional redundant location. Congratulations: it proves that you can copy and paste! 

* Name your unit tests clearly and consistently. If you’re testing how `ProductController`'s `Purchase` action behaves when `stock` is `0`, then maybe have a test fixture class called `PurchasingTests` with a unit test called `ProductPurchaseAction_IfStockIsZero_RendersOutOfStockView()`. This name describes the **subject** (ProductController’s Purchase action), the **scenario** (stock is zero), and the **result** (renders “out of stock” view). I don’t know whether there’s an existing name for this naming pattern, though I know others follow it. How about `S/S/R`?  Avoid non-descriptive unit tests names such as `Purchase()` or `OutOfStock()`. Maintenance is hard if you don’t know what you’re trying to maintain. 

* Apply merciless refactoring to unit tests, otherwise they may become similar to dreaded legacy code, but on the test side.

* If tests cannot be easily refactored, then the production code will be hard to refactor as well, leading to legacy production code.

* Avoid coding a tautology - i.e. keep your tests DRY. 

* Don't mock any type you don't own (e.g. a 3rd party library). If their maintainers make a breaking update to it, all your mocks will become worthless. Your tests will pass but when you push your code to prod, the User will get hit with bugs. 
 
* The most common way to deal with this is to create wrappers around the external lib/system.

* In order to verify integration with the third party library, write integration tests, and make them as compact and readable as possible as well.

* Don't mock everything, it's an anti-pattern. If everything is mocked, are we really testing the production code? Don't hesitate to not mock!

## SOURCES:

* https://github.com/mockito/mockito/wiki/How-to-write-good-tests
* http://blog.stevensanderson.com/2009/08/24/writing-great-unit-tests-best-and-worst-practises/
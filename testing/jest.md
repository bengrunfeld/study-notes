# Jest

## Matchers

`toBe` - checks for exact object equality

`toEqual` - tests the value of an object

`not` - negates. E.g. `expect(sum(1, 2)).not.toBe(3)`

## Truthyness

* `toBeNull`
* `toBeDefined`
* `toBeUndefined`
* `toBeTruthy`
* `toBeFalsy`


## Numbers

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);

For floating point equality, use `toBeCloseTo` instead of toEqual, because you don't want a test to depend on a tiny rounding error.

## Strings

You can check strings against regular expressions with toMatch:

    test('there is no I in team', () => {
      expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
      expect('Christoph').toMatch(/stop/);
    });

## Describe

By default, the before and after blocks apply to every test in a file. You can also group tests together using a `describe` block. When they are inside a `describe` block, the before and after blocks only apply to the tests within that `describe` block.

Note that the top-level `beforeEach` is executed before the `beforeEach` inside the describe block.

Jest executes all describe handlers in a test file before it executes any of the actual tests. 

## Test Only One

In Jest it's simple to run only one test - just temporarily change that test command to a `test.only`:

    test.only('this will be the only test that runs', () => {
      expect(true).toBe(false);
    });
    
    test('this test will not run', () => {
      expect('A').toBe('A');
    });

If you have a test that often fails when it's run as part of a larger suite, but doesn't fail when you run it alone, it's a good bet that something from a different test is interfering with this one.

## Mocks

There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a manual mock to override a module dependency.

## Manual Mocks

    const mockFunction = jest.fn(x => 42 + x)
    [0, 1].forEach()
    
    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    
    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

### `.mock` Property

All mock functions have this special `.mock` property, which is where data about how the function has been called and what the function returned is kept. The `.mock` property also tracks the value of this for each call, so it is possible to inspect this as well.

### Mock return values

Mock functions can also be used to inject test values into your code during a test:

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true

**IMPORTANT: try to avoid the temptation to implement logic inside of any function that's not directly being tested.**

### Snapshot Testing

Snapshots are a fantastic tool for identifying unexpected interface changes within your application – whether that interface is an API response, UI, logs, or error messages.

    expect(obj).toMatchSnapshot()

On subsequent test runs Jest will simply compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the test runner found a bug in your code (in this case, it's <Link> component) that should be fixed, or the implementation has changed and the snapshot needs to be updated.

The snapshot is directly scoped to the data you render, so components shouldn't affect each other during testing.

To update snapshots:

    jest --updateSnapshot

or 
    
    jest -u

This will re-generate snapshot artifacts for all failing snapshot tests. 

If we had any additional failing snapshot tests due to an unintentional bug, we would need to fix the bug before re-generating snapshots to avoid recording snapshots of the buggy behavior.

If you'd like to limit which snapshot test cases get re-generated, you can pass an additional `--testNamePattern`.

Failed snapshots can also be updated interactively in watch mode.

### Inline Snapshots

Inline snapshots behave identically to external snapshots (.snap files), except the snapshot values are written automatically back into the source code.

### Snapshot best practices:

1. Treat snapshots as code, and commit it to your repo. 
2. Running the same tests multiple times on a component that has not changed should produce the same results every time. So mock out things that change or use `expect.any(DATA_TYPE)`
3. Use descriptive snapshot names. The best names describe the expected snapshot content.

e.g. of #3:

    exports[`<UserName /> should render Alan Turing`] = `
    <div>
      Alan Turing
    </div>`

This means it's easy to see what's going wrong with the following bug:

    exports[`<UserName /> should render null`] = `
    <div>
      Alan Turing
    </div>`

## What's the difference between snapshot testing and visual regression testing?

Snapshot testing and visual regression testing are two distinct ways of testing UIs, and they serve different purposes. **Visual regression testing tools take screenshots of web pages and compare the resulting images pixel by pixel**. 

With Snapshot testing values are serialized, stored within text files, and compared using a diff algorithm.

## Does snapshot testing replace unit testing?

Snapshot testing is only one of more than 20 assertions that ship with Jest. The aim of snapshot testing is not to replace existing unit tests, but to provide additional value and make testing painless.
















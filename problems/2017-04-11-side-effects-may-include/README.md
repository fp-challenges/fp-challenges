# Side Effects May Include

Has this ever happened to you? You call a function twice in a row with the same parameters, and you get two different results!

My friend, you're using an impure function. Impure functions aren't the worst thing in the world, sometimes you need them to modify state.

In this challenge, you'll be refactoring bits of code that aren't as pure as they could be.

## General Information

As with the other challenges, practicing functional programming is not only encouraged but also required! 

## Challenge Details and Such

Being an excellent HR person with a decent amount of JavaScript knowledge, you decided that you can write your own employee management software. To start off, you wrote a few functions that would process an array of employee data.

Tim, one of your engineering friends, noticed that some of your JavaScript wasn't unit tested. He decided to write you a suite of tests to make sure that you can make sure changes won't cause your functionality to break. There's only one problem! The tests are failing! 

**Your challenge, should you accept it**: Figure out how to fix the test failures.

Execute the tests with the following command
    
    npm test

### Considerations and Things to Think About

1. You may not always be able to refactor functions entirely without changing a few things around.
1. Can you think of other ways you could guard yourself from some of the side effect issues in the code?
1. Aside from avoiding side effects, are there other functional programming practices you could apply here?

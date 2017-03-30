# Know Your States

"What is the capital of New Jersey?" demanded your teacher.
"Oh oh um... Trenton?" you say.
"Correct!" says the teacher. "Now, what is the least densely populated state in the USA?"

Many years later, long after your days of state-fact-memorization have passed, you stroll in to start your day.
Your friend is eagerly waiting at your desk to greet you.

*Friend*: "Hey there! Do you remember what the capital of NJ is?"
*You*: "Um... Trenton? Wait why?"
*Friend*: "I dunno. What's the least densely populated state in the USA anyway?"

Realizing you're long past your memorization prime, you decide to use your computer-hacking skills for great civic good
as well as factoid-finding.

# The factoids to find

1. What are the capitals of each state in the USA?
1. What is the most densely-populated state?
1. What is the least densely-populated state?
1. What state(s) have a city that's both its capital and has the largest population?
1. Find the land-area / water-area ratio of each state and order the states by this.
1. Come up with your own question and answer it!

# Where do I get this data?

The setup file contains code to create a list of simple `State` objects. No data finding or parsing required.

A State object contains the following:

```
  state: string (the full name of the state like "Georgia")
  capitalCity: string (name of the state's capital like "Concord")
  largestCity: string (name of the state's most populated city like "Newark")
  population: int (the estimated population of the entire state)
  totalArea: int (the total area of the state's borders including water and land)
  landArea: int (the area of the state that is not water)
  waterArea: int (the area of the state that is not land)
```

The data used is in the repository if you wish to examine it. [Original data source on Wikipedia](https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States).

# How do I get started?

A simple `npm start` from the directory will run the code. 
Edit the `state-facts.js` file to get the proper list of `State` objects. Add any functions you want here.

# General guidelines

Use JavaScript for this. We assume a Node-based environment. Feel free to try and make it work in a browser if you'd like!

You should attempt to look for reusable abstractions using functions only. Think about techniques such as:

* Closures
  * Functions that have access to other arguments from their enclosing functions.
* Higher-order functions
  * Functions that accept other functions.
  * Functions create different functions.

**It's encouraged to not use `lodash/fp` or `ramda` here!** The hope is to try and understand the baseline of what functions alone can provide. These libraries are great when you understand the fundamentals.

If you want, use ES6 features (fat-arrow functions). Feel free to use the standard collection functions (`map`, `filter`, `reduce`, etc) also.

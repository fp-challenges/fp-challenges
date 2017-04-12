/*
  Being the excellent HR person with a decent amount of JavaScript knowledge, 
  you decided that you'll keep track of employees using an array in JS.

  You've put all the employees in the array, based on the order in which they were hired.

  Note: This is actually a really bad way to keep track of people in general, but you already knew that.
*/
const employees = [
  {
    name : 'Daniel',
    dateOfBirth : '1984-01-12'
  },
  {
    name : 'Jack',
    dateOfBirth : '1946-04-06'
  },
  {
    name : 'Jane',
    dateOfBirth : '1989-08-30'
  },
  {
    name : 'Bill',
    dateOfBirth : '1965-11-06'
  },
  {
    name : 'Samantha',
    dateOfBirth : '1995-06-24'
  },
  {
    name : 'Bae',
    dateOfBirth : '1978-03-30'
  }
];

const getAges = require('./lib/getAges');
console.log('People with ages: ', getAges(employees));

const getOldest = require('./lib/getOldest');
console.log('The oldest employee: ', getOldest(employees).name)

/*
  Great! We know that Jack is the oldest fogey of them all with that function.
  You've just been informed that you need to bring on another person named Bill!
  Bill happens to be born on November 6th, 1965. That's two Bills in one day!
*/

employees.push({ name: 'Bill', dateOfBirth: '1965-11-06'});

/*
  Being the smart HR person you are, you realized you can't have two Bills in 
  the system if they were born on the same day.

  It hits you like a cement truck: EMPLOYEE ID NUMBERS!

  Because you have some strong sense of order, you want to reward employees 
  with a number based on when they were hired. Good thing you added people to
  the list as they were hired!
*/
const figureEmployeeIDs = function(people) {
  return people.map((person, index) => Object.assign({}, person, { id : `emp-${index+1}` }));
};

console.log('Employees with IDs: ', figureEmployeeIDs(employees));

/* 
  Uh oh, something bad happened here. 

  Daniel was supposed to be the first employee.

  Running `figureEmployeeIDs`, we find that somehow Samantha got employee #1. 

  The superiors won't like this.

  It turns out that you done messed up in the `getOldest` function. 

  Go back and refactor it!
*/

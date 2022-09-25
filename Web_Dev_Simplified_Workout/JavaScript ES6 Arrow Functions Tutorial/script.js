'use strict';

function sum(a, b) {
  return a + b;
}
//-->ARROW FUNCTION
let sum2 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}
let isPositive2 = number => number >= 0;

function randomNumber() {
  return Math.random;
}
let randomNumber2 = () => Math.random;

document.addEventListener('click', function () {
  console.log('Click');
});

document.addEventListener('click', () => console.log('Click'));

//VERY IMPORTANT ARROW FUNCTION USES THE THIS KEYWORD DIFFERENTLY THAN THE FUNCTION EXPRESSIONS OR DECLARATIONS
class Person {
  constructor(name) {
    this.name = name;
  }
  printNameArrow() {
    setTimeout(() => {
      console.log('Arrow: ' + this.name);
      console.log(this);
    }, 100);
  } //SETTIMEOUT HERE USES AN ARROW FUNCTION
  printNameFunction() {
    setTimeout(function () {
      console.log('Function: ' + this.name);
      console.log(typeof this, this);
    }, 100);
  } //SETTIMEOUT HERE USES A FUNCTION EXPRESSION
}

let person = new Person('Bob');
person.printNameArrow(); //borrows this from its parent element whose this is the Person {Bob}
person.printNameFunction(); //regular functions goes global return global this which is window this OR THE variable needs to be globally defined

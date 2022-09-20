'use strict';

//FUNCTION
function changeColor(element) {
  element.style.backgroundColor = '#333';
}
function changeColor2(element) {
  element.style.backgroundColor = '#ff6e00';
}
function changeColor3(element) {
  element.style.backgroundColor = '#ff2e40';
}
function changeColor4(element) {
  element.style.backgroundColor = '#ffaf40';
}

//--> GETELEMENTBYID - ONLY ONE ELEMENT
const grandparent = document.getElementById('grandparent-id');
changeColor(grandparent);
//--> GET ELMENTS BY CLASSNAME - SELECT MULTIPLE ELEMENTS
// const parents = document.getElementsByClassName('parent');
// console.log(parents); //IMPORTANT! returns an arrayish  HTML collection. So we need to change to an array first!
const parents = Array.from(document.getElementsByClassName('parent'));
parents.forEach(changeColor);

//--> QUERYSELECTOR
const grandparent2 = document.querySelector('#grandparent-id');
changeColor2(grandparent2);
const parent2 = document.querySelector('.parent');
changeColor2(parent2); //seelcts only one
//--> QUERYSELECTORALL
const parent3 = document.querySelectorAll('.parent');
parent3.forEach(changeColor2); //seelcts only one
//-->QUERYSELECTOR.CHILDREN
const parent4 = Array.from(grandparent2.children); //Returns an HTML collection arrayish data. Needs to be first converted to array
parent4.forEach(changeColor3);
//--> QUERYSELECTOR.PARENT
const childOne = document.querySelector('#select-me');
const findParent = childOne.parentElement;
//--> CLOSEST() LEAP UPWARD
const findGrandParent = childOne.closest('.grandparent');
console.log(findParent);
changeColor(findParent);
changeColor4(findGrandParent);
//--> LATERAL TRAVERSING
const childTwo = childOne.nextElementSibling;
changeColor3(childTwo);
changeColor4(childTwo.previousElementSibling);

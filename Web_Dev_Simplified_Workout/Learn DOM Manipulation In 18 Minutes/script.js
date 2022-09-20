'use strict';
// const body = document.body;
// const div = document.createElement('div');
// const i = document.createElement('i');

//--> DIFFERENCE BETWEEN APPEND AND APPEND CHILD
// body.append('Hello World'); //IMPORTANT! append is more generic and accepts sgtrings as well as elements.
// body.appendChild('Hello World'); // throws error as appendchild requires div, etc elements.

// body.append(div, i); //IMPORTANT! IT ACCEPTS MORE THAN ONE ITEWM AT A TIME
// body.appendChild(div); // iT ONLY ACCEPTS ONLY ONE THIGN AT A TIME

//--> DIFFERENCE BETWEEN INNERTEXT AND TEXTCONTENT
// div.innerText = 'HELLO WORLD - INNERTEXT';
// div.textContent = 'HELLO WORLD -TEXTCONTENT';

// const div1 = document.getElementById('test1');
// console.log(div1.textContent); //TEXTCONTENT PRINTS THE EXACT TEXT CONTENT WITH ALL THE SPACING AND THE INDENTATION AS IT APPEARS IN THE HTML CODE
// console.log(div1.innerText); //DO NOT RESPECT HTML AND DISPLAYS THE TEXT SIDE BY SIDE

//--> INNERHTML- SECURITY CONCERN SO WHAT?
// div.innerHTML = '<strong>Hello World 2</strong>'; //VERY IMPORTANT IT YIELDS SECURITY CONCERNS LIKE MALICIOUS CODE INJECTIONS
// const strong = document.createElement('strong');
// strong.innerText = 'Hello World 2';
// div.append(strong);

//--> REMOVING AND REINSTATING THE ELEMENT
const body = document.body;
const div2 = document.getElementById('test2');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');
//--> REMOVE ELEMENT
// spanBye.remove(); //It doesnt completely remove it. It still remains in the DOM but not on the page
// div2.removeChild(spanHi); //remove the element from the parent downward approach
//--> REINSTATE ELEMENT
// div2.append(spanBye); //We can again reinstate it

//--> ACCESS THE VALUE OF THE ATTRIBUTE
console.log(spanHi.getAttribute('id'));
console.log(spanHi.getAttribute('title'));
console.log(spanHi.getAttribute('bill')); ///can access non-standard attributes
console.log(spanHi.title);
console.log(spanHi.bill); //non standard attributes could not be accessed

//--> REPLACE THE VALUE OF AN ATTRIBUTE
spanHi.setAttribute('id', 'sdsdsdds');
console.log((spanHi.id = 'sdsdsdds'));
//--> REMOVE THE ATTRIBUTE
spanHi.removeAttribute('title');

//--> READ CUSTOM DATA ATTRIBUTES
console.log(spanHi.dataset.test);
console.log(spanHi.dataset.longerName); //IMPORTANT! converted to cameL case naming
console.log(spanHi.dataset.longername2);
//--> CREATE CUSTOM DATA ATTRIBUTES
spanHi.dataset.newName = 'hi'; //IMPORTANT! JS automatically sets the dataset name as <new-name>
//--> REMOVE CUSTOM DATA ATTRIBUTE
spanHi.removeAttribute('data-new-name'); //OPTION#1
delete spanHi.dataset.newName; //OPTION#2
console.log('HELLO DELETED!', div2.dataset.newName);
//--> CREATE,REMOVE,TOGGLE,CHECK, BOOLEAN BASED CHECK,REPLACE,LOOP THRU CLASSES, READ VALUE
spanHi.classList.add('new-class'); // single class entry
spanHi.classList.add('new-class', 'delirium'); //multiple classes entry
spanHi.classList.remove('hi1');
spanHi.classList.toggle('hi3'); //regular toggle
spanHi.classList.toggle('hi2', false); //boolean outcome based toggling.Sometimes you need to toggle a class based on a boolean value. For example if the boolean win is true then you want to add the win class to an element otherwise if win is false you want to remove the win class. Doing so is as simple as the below. --> element.classList.toggle('win', win); Similar to --> if (win) {element.classList.add('win')} else {element.classList.remove('win')}

console.log(spanHi.classList.contains('hi3')); //BOOLEAN CONFIRMATION FOR EXISTANCE OF THE INQUIRED CLASS IN THE SELECTED ELEMENT

spanHi.classList.replace('delirium', 'santaana'); //REPLACE A CLASS WITH ANOTHER ONE IN AN INQUIRED ELEMENT
spanHi.classList.forEach(className => {
  // console.log('Here are the classes inside spanHi element selection:');
  // console.log(className);
});
console.log(spanHi.classList);
console.log(spanHi.classList.value); //READ VALUE

//--> SET CSS STYLE INLINE
spanHi.style.backgroundColor = 'red';

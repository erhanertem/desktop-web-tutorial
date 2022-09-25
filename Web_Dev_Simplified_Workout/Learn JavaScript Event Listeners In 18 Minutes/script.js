'use strict';
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

//eventlistener structure : (typeof event to listen, bubbling call-back function, capturing call-back function)
// //-->LISTEN EVENT
// grandparent.addEventListener('click', event => {
//   console.log(event);
// });
// //-->MULTIPLE EVENT LISTENERS ON THE SAME NODE
// grandparent.addEventListener('click', event => {
//   console.log('GRANDY 1');
// });
// grandparent.addEventListener('click', event => {
//   console.log('GRANDY 2');
// });
//-->EVENT LISTENERS ON MULTIPLE OBJECT - EVENT BUBBLING
document.addEventListener('click', event => {
  console.log('Document CAPTURE', { capture: true });
});
document.addEventListener('click', event => {
  console.log('Document BUBBLE');
});

grandparent.addEventListener(
  'click',
  event => {
    console.log('GRANDY CAPTURE');
  },
  {
    capture: true, //--> EVENT CAPTURING
    once: true, //for once apply this and remove
  }
);
grandparent.addEventListener('click', event => {
  console.log('GRANDY BUBBLE');
}); // By default capturing is false as shown
parent.addEventListener(
  'click',
  event => {
    // event.stopPropagation(); //we stop propagation of the events chain
    console.log('PARENT CAPTURE');
  },
  { capture: true }
);
// parent.addEventListener('click', event => {
//   console.log('PARENT BUBBLE');
// });

parent.addEventListener('click', printHi);
setTimeout(() => {
  parent.removeEventListener('click', printHi);
}, 3000);
function printHi() {
  console.log('HI!!👋');
} //VERY IMPORTANT! IF WE HAVENT GATHER IN TO A FUNCTION EXPRESSION, AND SET IT AS ANONYMOUS ARROW FUNCTION, IT WOULDNT WORK!! IT WOULD TREAT THE ARROW FUNCTION AS SEPERATE AND THEY WOULDNT BE LINKED TO EACH OTHER WHATSOEVER.

child.addEventListener(
  'click',
  event => {
    console.log('CHILD CAPTURE');
  },
  { capture: true }
);
child.addEventListener('click', event => {
  event.stopPropagation(); //we stop propagation of the events chain
  console.log('CHILD BUBBLE');
});

//-->EVENT DELEGATION TO MULTIPLE ITEMS AT ONCE
const divs = document.querySelectorAll('div');
// divs.forEach(div => {
//   div.addEventListener('click', () => {
//     console.log('hi!!!!!!');
//   });
// }); //-->STEP#1. IT IS CLUNCKY PERFORMANCE WISE AND ADDS ONLY THE ITEMS AVAILABLE AT THAT TIME.
// document.addEventListener('click', e => {
//   if (e.target.matches('div')) {
//     console.log('hi!!!!!!!!!!!!');
//   }
// }); //-->STEP#2. VERY IMPORTANT!! this is more performant and a universal approach that could be customized. THIS COULD BE CODED AS FUNCTION TO REFINE MORE.
addGlobalEventListener('click', 'div', e => {
  console.log('hi-Iam_Globalized!!');
}); //-->STEP#3. GLOBALIZED EVENTLISTENER()
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

//IMPORTANT!! new div created after the event listener added is not in the scope of the listener!!
const newDiv = document.createElement('div');
newDiv.style.width = '200px';
newDiv.style.aspectRatio = '1/1';
newDiv.style.backgroundColor = 'purple';
// newDiv.addEventListener('click', () => console.log('hi!!!!!!')); //either we need to add it again specificcally for the element we created or? BETTER YET WE IMPLEMENT EVENT DELEGATION
document.body.append(newDiv);

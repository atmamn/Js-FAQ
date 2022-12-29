// Define the myArr variable
const myArr = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];

//variables
const main = document.querySelector('main'); 
main.classList.add('main-class');

const sections = document.querySelectorAll('main section');
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add('section-class');
    sections[i].addEventListener('click', function () {
      this.classList.toggle('active');
    })
  }

let divOne = document.querySelectorAll('.section-class div:nth-of-type(1)');
  for (let i = 0; i < divOne.length; i++) {
    divOne[i].classList.add('divOne-class');
  }

let divTwo = document.querySelectorAll('.section-class div:nth-of-type(2)');
for (k = 0; k < divTwo.length; k++) {
  divTwo[k].classList.add('divTwo-class');
}

// add h2
const hTwoElement = document.createElement('h2');
hTwoElement.innerText = 'Frequently Asked Questions';
hTwoElement.classList.add('hTwoElement-class')
main.insertBefore(hTwoElement, main.firstChild);



// Create a MutationObserver to listen for changes to the DOM
const observer = new MutationObserver((mutations) => {
  // Update the divOne variable when the DOM changes
  divOne = document.querySelectorAll('.section-class div:nth-of-type(1)');
});

// Start observing the main element
observer.observe(main, {childList: true, subtree: true});

// Your code to change the text content of the divOne elements can go here
for (let m = 0; m < myArr.length; m++){
  if (divOne[m]) {
    divOne[m].textContent = `The ${myArr[m]} question`;
  }
}

// Create a MutationObserver to listen for changes to the DOM
const observers = new MutationObserver((mutations) => {
  // Update the divTwo variable when the DOM changes
  divTwo = document.querySelectorAll('.section-class div:nth-of-type(2)');
});

// Start observing the main element
observers.observe(main, {childList: true, subtree: true});

// Your code to change the text content of the divTwo elements can go here
const myArrTwo = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
for (let k = 0; k < myArrTwo.length; k++) {
  if (divTwo[k]) {
    divTwo[k].textContent = `Array says ${myArrTwo[k]}. The "numbering" of content using letters in addition to others is done via JS. Any FAQ added will automatically become like the rest of the design.`;
  }
}


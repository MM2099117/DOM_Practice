
//selects the parent element you want to add to by its ID
const container = document.querySelector('#container');

//create the element, give it content and styles
const p = document.createElement('p');
p.textContent = "Hey I'm red!"
p.setAttribute('style', 'color:red;');
//add the element to the DOM
container.appendChild(p);


const addedH3 = document.createElement('h3');
addedH3.textContent = "I'm a blue h3!";
addedH3.setAttribute('style', 'color:blue');
container.appendChild(addedH3);


const addedDiv = document.createElement('div');
addedDiv.style.border = "thin solid black";
addedDiv.setAttribute('style','background-color:pink');


const divChild1 = document.createElement('h1');
divChild1.textContent = "I'm in a div!";
addedDiv.appendChild(divChild1);

const divChild2 = document.createElement('p');
divChild2.textContent = "ME TOO!"
addedDiv.appendChild(divChild2);

container.appendChild(addedDiv);




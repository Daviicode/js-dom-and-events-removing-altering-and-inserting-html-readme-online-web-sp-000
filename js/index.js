//this file is optional
//you can use this to paste in js code and have it run when index.html is loade

let element = document.createElement('div')

element.innerHTML = 'Hello';
element.style.backgroundColor = '#f9999'; // gives backgroundColor of a spicific number code

document.body.appendChild(element)

let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);


ul.style.textAlign = 'left';

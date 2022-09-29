const ulElement = document.getElementById("lista"); //aqui pegamos o element id

const newli = document.createElement('li'); // aqui criamos o tag LI

const liszero = document.createTextNode('Item 0'); //aqui criamos o texto ou qual quer element

newli.appendChild(liszero); // aqui colocamos o element dentro da tag li

ulElement.insertAdjacentElement('afterbegin', newli) // aqui inserimos o element dentro da lista
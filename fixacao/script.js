function insereItem(event) {
    const ulElement = document.getElementById("lista");
    const newli = document.createElement('li');
    const input = document.getElementById("meu-input");
    const liszero = document.createTextNode(input.value);

    newli.appendChild(liszero);
    ulElement.insertAdjacentElement('afterbegin', newli)
    
    console.log(input);
    console.log(liszero);
    console.log(newli);
    console.log(ulElement);
}
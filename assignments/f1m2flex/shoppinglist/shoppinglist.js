console.log('Welcome!');

const theList = document.getElementById('sList')

function getInputValue(){

    var text = document.getElementById('myInput').value

    console.log('a(n) ' + text + ' has been added to your shopping list.');
    const newElement = document.createElement('h2');
    newElement.className = 'ppA';
    newElement.innerHTML = text;
    theList.appendChild(newElement);
}





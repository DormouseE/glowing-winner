const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', addItems);
list.addEventListener('click', removeItems);
list.addEventListener('click', switchBackgroundColorOfItems);

function addItems() {
    let li = document.createElement('li');
    list.appendChild(li)
}

function removeItems(element) {
    if (element.target.tagName === 'LI')
        if (element.altKey) element.target.remove();
}


function switchBackgroundColorOfItems(element) {
    if (element.target.tagName === 'LI')
        element.target.style.background = element.target.style.background === 'red' ? 'yellow' : 'red';
}




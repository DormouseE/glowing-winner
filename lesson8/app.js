const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', addItem);
list.addEventListener('click', removeItem);
list.addEventListener('click', switchBackgroundColorOfItem);

function addItem() {
    let li = document.createElement('li');
    list.appendChild(li)
}

function removeItem (event) {
    if (event.target.tagName === 'LI')
        if (event.altKey) event.target.remove();
}


function switchBackgroundColorOfItem(event) {
    if (event.target.tagName === 'LI')
        event.target.style.background = event.target.style.background === 'red' ? 'yellow' : 'red';
}




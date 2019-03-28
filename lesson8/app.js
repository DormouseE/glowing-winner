
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', addItem);
list.addEventListener('click', removeItem);
list.addEventListener('click', eventChangeBackgroundColor);

function addItem() {
    let li = document.createElement('li');
    list.appendChild(li)
}

function removeItem(event) {
    if ((event.target.tagName === 'LI') && event.altKey) {
        event.target.remove();
    }
}

function eventChangeBackgroundColor(event) {
    switchBackgroundColorOfItem(event.target);
}

function switchBackgroundColorOfItem(element) {
    if (element.tagName === 'LI')
        element.style.background = element.style.background === 'red' ? 'yellow' : 'red';
}
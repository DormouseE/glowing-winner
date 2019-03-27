const button = document.querySelector('button');
const list = document.querySelector('ul');

function addItems() {
    let li = document.createElement('li');
    list.appendChild(li)
};

function toggleBackgroundColor(element) {
    if (element.target.tagName === 'LI')
    element.target.style.background = element.target.style.background === 'red' ? 'yellow' : 'red';
};


function removeElem(element) {
    if (element.target.tagName === 'LI')
    if (element.altKey) element.target.remove();
}

button.addEventListener('click', addItems);
list.addEventListener('click', toggleBackgroundColor);
list.addEventListener('click', removeElem);

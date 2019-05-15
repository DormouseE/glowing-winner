const CONTACTS_URL = 'http://fep-app.herokuapp.com/api/contacts';

const addContactBtn = document.getElementById('addContactBtn');
const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactSurnameInput = document.getElementById('surnameInput');
const contactEmailInput = document.getElementById('emailInput');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;

let contacts = [];

init();

function init() {

    addContactBtn.addEventListener('click', onAddContactBtnClick);
    contactsList.addEventListener('click', onContactsListClick);

    fetchContactsList();
}



function fetchContactsList() {
    return fetch(CONTACTS_URL)
        .then((resp) => resp.json())
        .then(setContacts)
        .then(renderContactsList)

}

function setContacts(data) {
    contacts = data;

    return data;
}

function renderContactsList(data) {
    console.log(data)
    contactsList.innerHTML = data.map((el) => {
        return contactTemplate
            .replace('{{name}}', el.name)
            .replace('{{surname}}', el.surname)
            .replace('{{phone}}', el.phone)
            .replace('{{email}}', el.email)
            .replace('{{id}}', el.id)
            .replace('{{class}}', el.isDone ? 'done' : '')
    }).join('\n');
}


function onAddContactBtnClick(event) {
    event.preventDefault();

    submitContact();
}

function submitContact() {
    const contact = {
        name: contactNameInput.value,
        phone: contactPhoneInput.value,
        surname: contactSurnameInput.value,
        email: contactEmailInput.value,
        isDone: false
    };

    addContact(contact).then(fetchContactsList)
}


function addContact(contacts) {
    return fetch(CONTACTS_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contacts)
    })
}


function onContactsListClick(event) {
    if (event.target.tagName === 'BUTTON') {
        deleteContact(event.target.parentNode.parentNode)
            .then(fetchContactsList);

    } else if (event.target.parentNode.classList.contains('contacts')) {
        toggleContactState(event.target.parentNode)
            .then(fetchContactsList);
    }
}


function toggleContactState(el) {
    const id = el.dataset.contactId;
    const contact = contacts.find((el) => { return el.id == id });

    contact.isDone = !contact.isDone;
    console.log(id, contact);


    return fetch(CONTACTS_URL + '/' + contact.id, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
}

function deleteContact(el) {
    const id = el.dataset.contactId;
    const contact = contacts.find((el) => { return el.id == id });

    return fetch(CONTACTS_URL + '/' + contact.id, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
}
const URL = 'http://fep-app.herokuapp.com/api/contacts';
const newContactForm = document.getElementById('newContactForm');
const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactEmailInput = document.getElementById('emailInput');


const contactTemplate = document.getElementById('contactTemplate').innerHTML;
const editContactTemplate = document.getElementById('editTemplate').innerHTML;

let contacts = [];
init()
function init(){
    newContactForm.addEventListener('submit', newContactFormSubmit);
    contactsList.addEventListener('click', onContactsListClick);

    fetchContacts();
}

function fetchContacts(){
    return fetch(URL)
            .then((response) => response.json())
            .then(setContacts)
            .then(rendeContacts);
}

function setContacts(data){
    return contacts = data
}

function rendeContacts(data){
    contactsList.innerHTML = data.map((contact) => {
        return contactTemplate
            .replace('{{id}}', contact.id)
            .replace('{{name}}', contact.name)
            .replace('{{phone}}', contact.phone)
            .replace('{{email}}', contact.email)
    }).join('\n');
}

function newContactFormSubmit(e){
    e.preventDefault();

    submitContact();
}

function onContactsListClick(event) {
    if (event.target.classList.contains('delete')) {
        removeContact(event.target.parentNode.parentNode)
            .then(fetchContacts);
    } else if (event.target.classList.contains('edit')) {
        editContact(event.target.parentNode.parentNode)
    } else if (event.target.classList.contains('save')) {
        saveContact(event.target.parentNode.parentNode)
    } else if (event.target.classList.contains('cancel')) {
        cancelEdit()
    } else if(event.target.tagName === 'TD'){
        showInf(event.target.parentNode.dataset.contactId)
        .then(fetchContacts);
    }
}

function removeContact(el){
    const id = el.dataset.contactId;
    return fetch(URL + '/' + id, {method: 'DELETE'});
}

function editContact(el) {
    const id = el.dataset.contactId;
    const contact = contacts.find((el) =>{ return el.id == id });
    el.innerHTML = editContactTemplate
        .replace('{{id}}', contact.id)
        .replace('{{name}}', contact.name)
        .replace('{{phone}}', contact.phone)
        .replace('{{email}}', contact.email)
}


function saveContact(el) {
    const id = el.dataset.contactId;
    const contact = contacts.find((el) =>{ return el.id == id });
    
    contact.name = document.getElementById('editName').value;
    contact.phone =document.getElementById('editPhone').value;
    contact.email = document.getElementById('editEmail').value;

    updateContact(contact)
        .then(fetchContacts);
}


function cancelEdit() {
    fetchContacts();
}


function updateContact(contact){
    return fetch(URL + '/' + contact.id, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
}

function submitContact(){
    const contact = {
        name: contactNameInput.value,
        phone: contactPhoneInput.value,
        email: contactEmailInput.value,
        
    }
    addContact(contact)
        .then(fetchContacts);

    resetContactForm();
}

function addContact(contact){
    return fetch(URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
}

function resetContactForm(){
    contactNameInput.value = '';
    contactPhoneInput.value = '';
    emailInput.value = '';
}

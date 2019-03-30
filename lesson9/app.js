const addContactBtn = document.getElementById('addContactBtn');
const contactsList = document.getElementById('contactsList')
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactAgeInput = document.getElementById('ageInput');
const contactTemplete = document.getElementById('contactTemplete').innerHTML;


contactsList.addEventListener('click', onDeleteContactBtnClick);
addContactBtn.addEventListener('click', onAddContactBtnClick);



function onAddContactBtnClick() {
  submitContact();
}

function onDeleteContactBtnClick() {
  deleteContact(event.target);
}

function submitContact() {
  const contact = {
    name: contactNameInput.value,
    phone: contactPhoneInput.value,
    age: contactAgeInput.value
  }
  addContact(contact);
  resetContactForm();
}

function addContact(contact) {
  const contactTr = document.createElement('tr');
  contactTr.innerHTML = contactTemplete
    .replace('{{name}}', contact.name)
    .replace('{{phone}}', contact.phone)
    .replace('{{age}}', contact.age);

  contactsList.appendChild(contactTr);
}

function resetContactForm() {
  contactNameInput.value = '';
  contactPhoneInput.value = '';
  contactAgeInput.value = '';
}

function deleteContact(e) {
  if (e.id === "deleteContactBtn") {
    e.parentNode.parentNode.remove();
  }
}

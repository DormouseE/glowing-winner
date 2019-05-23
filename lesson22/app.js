$(function () {
    const URL = 'http://fep-app.herokuapp.com/api/contacts';
    const $addContactBtn = $('#addContactBtn');
    const $contactForm = $('#contactForm');
    const $contactNameInput = $('#nameInput');
    const $contactPhoneInput = $('#phoneInput');
    const $contactEmailInput = $('#emailInput');
    const $contactIdInput = $('#idInput');
    const contactTemplate = $('#contactTemplate').html();
    // const isEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // const isPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    let contacts = [];

    $addModalWindow = $('#addModalWindow').dialog({
        autoOpen: false,
        width: 400,
        modal: true,
        show: {
            effect: "blind",
            duration: 500
        },
        buttons: [
            {
                text: 'Save',
                click: () => {
                    submitContact();
                }
            }
        ]
    });

    init();


    function init() {
        bindEventListener();
        fetchContacts();
    }

    // function isFormValid() {
    //     if (isPhone.test($contactPhoneInput) 
    // && isEmail.test($contactEmailInput)) return true;
    // }

    function bindEventListener() {
        $contactForm.click(onContactsFormClick);
        $addContactBtn.click(() => {
            resetContactForm();
            $addModalWindow.dialog('open')
        });
    }

    function onContactsFormClick(e) {
        if ($(e.target).hasClass('edit')) {
            editContact($(e.target).parents('.contactItem').data('contactId'));
        } else if ($(e.target).hasClass('delete')) {
            deleteContact($(e.target).parents('.contactItem').data('contactId'))
                .done(fetchContacts);
        }
    }


    function fetchContacts() {
        $.ajax({
            url: URL,
            type: 'GET'
        }).done(setContacts)
            .done(renderContacts)
    }

    function setContacts(data) {
        contacts = data;
        return data;
    }

    function deleteContact(id) {
        const contact = contacts.find((item) => item.id == id);
        return $.ajax({
            url: URL + '/' + contact.id,
            type: 'DELETE'

        })
    }

    function editContact(id) {
        const contact = contacts.find((item) => item.id == id);
        $contactIdInput.val(contact.id)
        $contactNameInput.val(contact.name);
        $contactPhoneInput.val(contact.phone);
        $contactEmailInput.val(contact.email);

        $addModalWindow.dialog('open');
    }

    function submitContact() {
        const contact = {
            name: $contactNameInput.val(),
            phone: $contactPhoneInput.val(),
            email: $contactEmailInput.val()
        }

        $addModalWindow.dialog('close');

        if ($contactIdInput.val()) {
            contact.id = $contactIdInput.val();
            updateContact(contact)
                .done(fetchContacts);
        } else {
            addContact(contact)
                .done(fetchContacts);
        }
    }

    function renderContacts(data) {
        $contactForm.html(data.map((contact) => {
            return contactTemplate
                .replace('{{id}}', contact.id)
                .replace('{{name}}', contact.name)
                .replace('{{phone}}', contact.phone)
                .replace('{{email}}', contact.email)
        }).join('\n'))
    }

    function updateContact(contact) {
        return $.ajax({
            url: URL + '/' + contact.id,
            type: 'PUT',
            data: JSON.stringify(contact),
            contentType: 'application/json',
            dataType: 'json'
        })
    }

    function addContact(contact) {
        return $.ajax({
            url: URL,
            type: 'POST',
            data: JSON.stringify(contact),
            contentType: 'application/json',
            dataType: 'json'
        })
    }


    function resetContactForm() {
        $contactIdInput.val('');
        $contactNameInput.val('');
        $contactPhoneInput.val('');
        $contactEmailInput.val('');
    }
});
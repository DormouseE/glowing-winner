const URL = 'https://jsonplaceholder.typicode.com/users';

var request = function () {
  var xhr = new XMLHttpRequest();
  return function (method, url, callback) {
    xhr.onload = function () {
      callback(JSON.parse(xhr.responseText));
    };
    xhr.open(method, url);
    xhr.send();
  };
}();

class Users {

  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    this.getRequest()
  }

  getRequest() {
    request('get', URL, this.renderContacs.bind(this));
  }

  renderContacs(resp) {
    const userTemplate = document.getElementById('userTemplate').innerHTML;
    let user = '';

    resp.forEach((item) => {
      user += userTemplate
        .replace('{{name}}', item.name)
        .replace('{{phone}}', item.phone)
        .replace('{{email}}', item.email)
    })
    this.el.children[1].innerHTML = user;
  }
}

const userList = new Users(
  document.getElementById('usersListTable')
);


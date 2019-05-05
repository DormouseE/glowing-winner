
/****** Function to make request *******
USAGE: 
request('get', 'http://exmaple.com', (resp)=> {console.log(resp)} );
*/

function request(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

class Users {
  static BASE_URL = 'https://jsonplaceholder.typicode.com';
  static USERS_PATH = '/users';
  static POSTS_PATH = '/posts';
  static ALBUMS_PATH = '/albums';
  static USER_ROW_TEMPLATE = document.getElementById('userTemplate').innerHTML;

  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    this.onBodyClick = this.onBodyClick.bind(this);

    this.tbody = this.container.getElementsByTagName('tbody')[0];
    this.tbody.addEventListener('click', this.onBodyClick)
    this.fetchUsers();
  }

  onBodyClick(e) {
    const id = e.target.parentNode.dataset.userId;
    this.fetchUserPostsAndAlbums(id)
  }

  fetchUsers() {
    const usersUrl = Users.BASE_URL + Users.USERS_PATH;

    request('get', usersUrl)
      .then((resp) => this.renderUsers(resp));
  }


  fetchUserPostsAndAlbums(id){
    const urlPosts = Users.BASE_URL + Users.POSTS_PATH + '?userId=' + id;
    const urlAlbums = Users.BASE_URL + Users.ALBUMS_PATH + '?userId=' + id;

    request('get', urlPosts)
      .then((resp) => {
        this.renderUserPosts(resp);
        return request('get', urlAlbums)
      })
      .then((resp) => this.renderUserAlbums(resp));
  }


  renderUsers(usersList) {
    this.tbody.innerHTML = usersList.map((user) => {
      return Users.USER_ROW_TEMPLATE
        .replace('{{id}}', user.id)
        .replace('{{name}}', user.name)
        .replace('{{phone}}', user.phone)
        .replace('{{email}}', user.email)
    }).join('\n');
  }

  renderList(e) {
    let list = '';
    e.forEach((item) => {
      return list += '<li>' + item.title;
    });
    return list;
  }

  renderUserPosts(respPosts) {
    this.userPosts = document.getElementById('userPosts');
    this.userPosts.innerHTML = this.renderList(respPosts);
  }

  renderUserAlbums(respAlbums) {
    this.userAlbums = document.getElementById('userAlbums');
    this.userAlbums.innerHTML = this.renderList(respAlbums);
  }

}

const usersList = new Users(
  document.getElementById('usersListTable')
)


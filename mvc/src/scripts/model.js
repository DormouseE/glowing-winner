let urlWeakMap = new WeakMap;

export default class ToDoModel {
    get url() {
        return urlWeakMap.get(this);
    }

    set url(val) {
        urlWeakMap.set(this, val);
    }

    constructor(collectionUrl, data) {
        this.url = collectionUrl;
        Object.assign(this, data);

        // console.log('model constructor', this.url);
    }

    delete() {
        console.log('delete')
        return fetch(this.url + '/' + this.id, {
            method: "DELETE",
        })
    }
}





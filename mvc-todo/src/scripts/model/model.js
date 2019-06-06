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

        this.setData(data);
    }

    setData(data){
        Object.assign(this, data);
    }

    save() {
         console.log('save')
        if (this.id) {
            return this.change();
        } else {
            return this.create();
        }
    }

    change() {
        return fetch(`${this.url}/${this.id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        })
        
    }
    
    create() {
        return fetch(`${this.url}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        })
        .then((response) =>  response.json())
        .then((data) => this.setData(data));
    }

    delete() {
        fetch(`${this.url}/${this.id}`, {
            method: "DELETE",
        })
    }

    changeState() {
        console.log('change')
        this.isDone = !this.isDone;
        this.save();
        return Promise.resolve();
    }

}
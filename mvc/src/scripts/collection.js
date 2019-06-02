import ToDoModel from "./model";

export default class ToDoCollection{
    constructor(url){
        this.url = url;
        this.list = [];
        this.fetch = this.fetch.bind(this);
        this.setData = this.setData.bind(this);

        console.log('collection', url);
    }

    fetch(){
        return fetch(this.url)
                .then((response => response.json()))
                .then(this.setData)
    }

    setData(list){
        return this.list = list.map(el => new ToDoModel(this.url, el));
        
    }

    get(id){
        return this.list.find(el => el.id == id);
    }

}
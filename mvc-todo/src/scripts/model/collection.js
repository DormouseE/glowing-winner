import ToDoModel from "../model/model";

export default class ToDoCollection {
    constructor(url) {
        this.url = url;
        this.taskList = [];

        this.setData = this.setData.bind(this);
        this.fetch = this.fetch.bind(this);
        console.log('collection', url);
    }

    fetch() {
        return fetch(this.url)
            .then((response => response.json()))
            .then(this.setData)
    }

    setData(taskList) {
        return this.taskList = taskList.map(el => new ToDoModel(this.url, el));
    }

    get(id) {
        return this.taskList.find(el => el.id == id);
    }

    delete(id) {
        const model = this.get(id);
        model.delete();
        this.taskList = this.taskList
            .filter(item => item != model);
        return Promise.resolve();

    }

    addTodo(data) {
        const model = new ToDoModel(this.url, data);
        return model
            .save()
            .then(this.fetch);
    }

}
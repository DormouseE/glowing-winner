
import '../../styles/list.css';

import ToDoCollection from '../model/collection';
import config from '../config';
import TodoView from '../view/view';
import ToDoForm from '../view/input';


export default class ToDoController {
    constructor() {
        console.log('contorller constructor');
        this.collection = new ToDoCollection(config.todoUrl);
        this.view = new TodoView();
        this.form = new ToDoForm

        this.renderData = this.renderData.bind(this);

        this.view.onDelete = (id) => this.delete(id);
        this.form.onSubmit = (newItem) => this.addItem(newItem);
        this.view.onItem = (id) => this.changeStateItem(id);

        this.collection
            .fetch()
            .then(this.renderData);

    }

    renderData() {
        this.view.render(this.collection.taskList)
    }

    addItem(newItem) {
        console.log('add')
        this.collection
            .addTodo(newItem)
            .then(this.renderData);
    }


    delete(id) {
        this.collection
            .delete(id)
            .then(this.renderData);
    }

    changeStateItem(id) {
        console.log('state')
        this.collection
            .changeState(id)
            .then(this.renderData)
    }

}
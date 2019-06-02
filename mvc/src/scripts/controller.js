import ToDoCollection from './collection';
import config from './config';
import TodoView from './view';
import ToDoModel from './model';


export default class ToDoController {
    constructor() {
        this.model = new ToDoModel();
        this.collection = new ToDoCollection(config.contactsUrl);
        this.view = new TodoView('#list')

        this.view.onDelete = (id) => this.deleteItem(id);

        this.renderContacts()

    }

    deleteItem(id) {
        console.log('deleteItem')
        const model = this.collection.get(id);
        model.delete(id)
            .then(renderContacts)
    }


    renderContacts() {
        this.collection
            .fetch()
            .then((data) => this.view.render(data));
    }


}
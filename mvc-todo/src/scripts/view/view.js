import $ from 'jquery';

export default class TodoView{
    constructor(){
        this.appendElement();

        this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
        this.onItemClick = this.onItemClick.bind(this);

        this.$el.on('click', '.delete-btn', this.onDeleteBtnClick);
        this.$el.on('click','.todo', this.onItemClick);
        this.$taskNameInput = $('#taskNameInput');
    }

    appendElement(){
        this.$el = $(
            `<div class="container">
            <div id="taskList" class="task-list u-full-width">
            </div>`
        );
        this.$taskList = this.$el.find('#taskList');
        $(document.body).append(this.$el);
    }

    getId(el){
        return $(el).closest('#todoDiv').data('todoId');
    }

    onDeleteBtnClick(event){
        const id = this.getId(event.target);
        this.onDelete && this.onDelete(id);
    }

    render(data){
        this.$el.html(
            data.map(this.renderItem).join('\n')
        )
    }

    renderItem(el){
        const todoClass = el.isDone? 'done': ''
        return `<div data-todo-id=${el.id} id="todoDiv" class="todo ${todoClass}">
                    ${el.title}
                    <button class="delete-btn">X</button>
                </div>`
    }


    onItemClick(event) {
        const id = $(event.target).data('todoId')
        this.onItem && this.onItem(id);
    }
}   
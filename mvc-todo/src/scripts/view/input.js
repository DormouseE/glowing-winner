import $ from 'jquery';


export default class ToDoForm{
    constructor(){
        this.appendElement()
        this.$el.submit((event) => this.submit(event))
    }
    appendElement(){
        this.$el = $(
            `<form id="addTaskForm">
                <div class="row">
                    <div class="ten columns">
                        <input type="text" id="taskNameInput" class="u-full-width">
                    </div>
                    <div class="two columns">
                        <input type="submit" class="u-full-width" value="Add">
                    </div>
                </div>
            </form>`
                    )
        this.$nameInput = this.$el.find('#taskNameInput'); 
       
        $(document.body).append(this.$el);
    }
    submit(event){
        event.preventDefault();
        const newItem = {
            title: this.$nameInput.val(),
            isDone: false
        };

        this.onSubmit && this.onSubmit(newItem);
    }
}
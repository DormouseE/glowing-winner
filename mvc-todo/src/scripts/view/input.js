import $ from 'jquery';


export default class ToDoForm{
    constructor(){
        this.appendElement()
        this.$el.submit((ev) => this.submit(ev))
    }
    appendElement(){
        this.$el = $(
            `<form id="addTaskForm">
                <div class="row">
                    <div class="eight columns">
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
    submit(ev){
        ev.preventDefault();
        const newItem ={};
        newItem.title = this.$nameInput.val();
        newItem.isDone = false;
        this.onSubmit && this.onSubmit(newItem);
    }
}
import $ from 'jquery';

export default class TodoView {
    constructor(elId) {
        this.$el = $(elId);
        this.renderItem = this.renderItem.bind(this);
        this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
        this.$el.on('click', 'button', this.onDeleteBtnClick);

    }

    onDeleteBtnClick(event) {
        const id = $(event.target).parents('tr').data('id');
        this.onDelete(id);

    }


    render(data) {
        this.$el.html(
            ` <table class="u-full-width" id="contacts-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="list">${data.map(this.renderItem).join('\n')}</tbody>
    </table>`
        )
    }

    renderItem(el) {
        return `<tr data-contact-id="${el.id}">
        <td>
           ${el.name}
        </td>
        <td>
           ${el.phone}
        </td>
        <td>
           ${el.email}
        </td>
        <td>
            <button class= "btn-delete">Delete</button>
        </td>
    </tr>`
    }
}   

const todoList = [{
    name:'make dinner',
    dueDate: '02-01-2018'
}, 
{    
    name: 'watch youtube',
    dueDate: '03-05-2021'
}];

renderTodoList();

function renderTodoList () {
    let todolistHTML = '';

    for (let i = 0; i < todoList.length; i += 1) {
        const todoObject = todoList[i];
        /*const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        Below one is the shortcut for the above two lines*/
        const { name, dueDate } = todoObject;
        const html = `
        <p>
        ${name} ${dueDate} 
        <button class="delete-button" onclick = '
            todoList.splice(${i},1);
            renderTodoList();
        '>Delete</button>
        </p>`;
        todolistHTML += html;

    }
    console.log(todolistHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todolistHTML;

}


function addTodo () {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value

    todoList.push({
        name: name,
        dueDate: dueDate
    });
    

    inputElement.value = '';
    
    renderTodoList();
}

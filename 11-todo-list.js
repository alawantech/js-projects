const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
}



const todoList2 = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList2.length; i++) {
    const todo = todoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo2() {
  const inputElement = document.querySelector('.js-name-input2');
  const name = inputElement.value;
  
  todoList2.push(name);
  console.log(todoList2);

  inputElement.value = '';

  renderTodoList();
}

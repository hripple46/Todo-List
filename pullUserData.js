let newTodoItem = [];
let todoForm = document.querySelector("#todoItemForm");

function displayTodoItemForm() {
  todoForm.style.display = "block";
}

function pullToDoItemData() {
  newTodoItem = [];
  let inputs = document.querySelectorAll(".todoInput");
  for (let i = 0; i < inputs.length; i++) {
    newTodoItem.push(`${inputs[i].value}`);
  }
}
function createObject(x) {
  let userTodoItem = todoItem(
    newTodoItem[0],
    newTodoItem[1],
    newTodoItem[2],
    newTodoItem[3]
  );
  x.push(userTodoItem);
}

function hideTodoItemForm() {
  todoForm.style.display = "none";
}
function resetForm() {
  document.getElementById("todoForm").reset();
}

//object constructor
const todoItem = (title, Description, Due, Priority, list) => {
  return { title, Description, Due, Priority, list };
};

export { todoItem };
export {
  pullToDoItemData,
  displayTodoItemForm,
  hideTodoItemForm,
  createObject,
  resetForm,
};

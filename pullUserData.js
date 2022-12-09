let newTodoItem = [];
let todoForm = document.querySelector("#todoItemForm");

function displayTodoItemForm() {
  todoForm.style.display = "block";
}

function pullToDoItemData() {
  newTodoItem = [];
  let inputs = document.querySelectorAll(".todoInput");
  for (let i = 0; i < inputs.length; i++) {
    console.log(inputs[i].value);
    if (inputs[i].value == null) {
      console.log("No Good");
    }
    newTodoItem.push(`${inputs[i].value}`);
    console.log(inputs[i].value);
  }
}

function createObject(x, y) {
  let userTodoItem = todoItem(
    newTodoItem[0],
    newTodoItem[1],
    newTodoItem[2],
    newTodoItem[3],
    newTodoItem[4]
  );

  x.push(userTodoItem);
  y.push(userTodoItem);
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
